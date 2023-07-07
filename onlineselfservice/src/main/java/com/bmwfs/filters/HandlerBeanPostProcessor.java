package com.bmwfs.filters;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.BeanPostProcessor;
import org.springframework.stereotype.Component;

@Component
public class HandlerBeanPostProcessor  implements BeanPostProcessor {
    @Override
    public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {
//        System.out.println(beanName+"--->"+bean.getClass().getName());
        Object res = BeanPostProcessor.super.postProcessBeforeInitialization(bean, beanName);
        if (bean.getClass().getName() == "com.bmwfs.services.CustomService") {
            System.out.println("******************");
            System.out.println(res.hashCode() + "   " + beanName);
            System.out.println("******************");
        }
        if (bean.getClass().getName() == "com.bmwfs.controllers.HomeController") {
            System.out.println("--------------------------");
            System.out.println(res.hashCode() + "   " + beanName);
            System.out.println("--------------------------");
        }
        return res;
    }

    @Override
    public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {

        return BeanPostProcessor.super.postProcessAfterInitialization(bean, beanName);
    }
}
