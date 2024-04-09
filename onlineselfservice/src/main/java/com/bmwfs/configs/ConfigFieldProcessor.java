package com.bmwfs.configs;

import javax.annotation.processing.AbstractProcessor;
import javax.annotation.processing.ProcessingEnvironment;
import javax.annotation.processing.RoundEnvironment;
import javax.annotation.processing.SupportedAnnotationTypes;
import javax.annotation.processing.SupportedSourceVersion;
import javax.lang.model.SourceVersion;
import javax.lang.model.element.Element;
import javax.lang.model.element.ElementKind;
import javax.lang.model.element.TypeElement;
import javax.lang.model.element.VariableElement;
import javax.tools.Diagnostic;
import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;
import java.util.Set;

@SupportedAnnotationTypes("ConfigField")
@SupportedSourceVersion(SourceVersion.RELEASE_8)
public class ConfigFieldProcessor extends AbstractProcessor {

    private Properties properties;

    @Override
    public synchronized void init(ProcessingEnvironment processingEnv) {
        System.out.println("helll***************************");
        super.init(processingEnv);
        properties = new Properties();
        try {
            properties.load(new FileReader("config.json")); // 读取配置文件
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public boolean process(Set<? extends TypeElement> annotations, RoundEnvironment roundEnv) {
        for (Element element : roundEnv.getElementsAnnotatedWith(ConfigField.class)) {
            if (element.getKind() == ElementKind.FIELD) {
                VariableElement variableElement = (VariableElement) element;
                ConfigField annotation = variableElement.getAnnotation(ConfigField.class);
                String fieldName = annotation.value();
                if (fieldName.isEmpty()) {
                    fieldName = variableElement.getSimpleName().toString();
                }

                String configValue = properties.getProperty(fieldName);
                if (configValue != null) {
                    try {
                        variableElement.getEnclosingElement().getClass().getField(variableElement.getSimpleName().toString()).set(null, configValue);
                    } catch (IllegalAccessException | NoSuchFieldException e) {
                        e.printStackTrace();
                    }
                } else {
                    processingEnv.getMessager().printMessage(Diagnostic.Kind.WARNING, "Configuration value not found for field: " + fieldName);
                }
            }
        }
        return true;
    }
}
