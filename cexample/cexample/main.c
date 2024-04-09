
#include<stdio.h>
#include<array>


int main() {
	int arr[] = { 64,34,25,12,22,11,90 };
	int len = sizeof(arr) / sizeof(arr[0]);

	printf("原始数组：");
	printArray(arr, len);

	printf("排序数组：");
	bubbleSort(arr, len);
	printArray(arr, len);
	printf("hello world");

	return 0;
}



