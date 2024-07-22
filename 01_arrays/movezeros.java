class solution{
    public static int[]movezeros(int n, int []a){
        int j= -1;
        for (int i=0; i<n; i++){
            if(a[i]==0){
                j=i;
                break;
            }
        }

        if (j==-1)return a;
        for(int i=j+1; i<n; i++){
            if(a[i]!=0){
                int temp =a[i];
                a[i]=a[j];
                a[j]=temp;
                j++;
            }
        }
        return a;
    }
    public static void main(String[] args) {
        int[]arr={1,0,0,2,3,4,5,6,0,0,0,5,6,1};
        int n =14;
        int[]ans=movezeros(n, arr);
        for(int i=0; i<n; i++){
            System.out.println(ans[i]+" ");

        }
        System.out.println(" ");

    }
}