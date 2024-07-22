package ARRAYS;

public class linear_search {

    public static int search(int[]arr,int num){
        for(int i=0; i<arr.length; i++){
            if(arr[i]==num){
                return i;
            }
            
        }
    return -1;
    
   
    
}
public static void main(String[]args){
    int[] arr={1,2,4,5,6,7};
    int num=4;
    int result=search(arr,num);
    if (result !=-1){
        System.out.println("number found at index"+ result);

     } else{
            System.out.println("Number not found in the array");
        }
    } 
}
