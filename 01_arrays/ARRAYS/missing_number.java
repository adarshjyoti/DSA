package ARRAYS;

public class missing_number {
  /*  public static int MISSINGNUMBER(int[]a, int N){       this is brute force method
        for(int i=1; i<N; i++){

            int flag=0;

            for(int j=0; j<N-1; j++){
                if(a[j]==i){
                    flag=1;
                    break;
                }
            }

        if(flag==0)return i;
            
        }
        return -1;
    */

    /*public static int MISSINGNUMBER(int[]a,int N){                     better approach
        int hash[]=new int[N+1];
        for(int i=0; i<N-1; i++)
        hash[a[i]]++;

        //checking the frequnece for 1 to N
        for(int i=1; i<=N; i++){
            if(hash[i]==0){
                return i;
            }
        }
        return -1;
    }*/

    
    public static void main(String[] args) {
        int N=5;
        int a[]={1,2,4,5,6};
        int ans=MISSINGNUMBER(a,N);
        System.out.println("the missing no is"+ans);
    }

    
}


