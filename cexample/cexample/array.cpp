#include <stdio.h>

void printArray(int arr[], int size) {
	for (int i = 0;i < size;i++) {
		printf("%d ", arr[i]);
	}

	printf("\n");
}

void bubbleSort(int arr[], int size) {
	for (int i = 0;i < size;i++) {
		for (int j = i + 1;j < size;j++) {
			if (arr[i] > arr[j]) {
				int temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
}