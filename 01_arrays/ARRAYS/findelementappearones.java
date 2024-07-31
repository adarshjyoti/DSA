package ARRAYS;

public class findelementappearones {
    public static int getsingleElement(int []arr){
        /*                                                                  brute force approach
        int n= arr.length;
        for(int i=0; i<n; i++){   //Run a loop for selecting elements:
            int num=arr[i];
            int cnt=0;

            for(int j=0; j<n; j++){  ////find the occurrence using linear search:
                if(arr[j]==num)
                cnt++;
            }
            if(cnt==1)return num;
        }
        return -1;
    
    }
*/
       /*  int n=arr.length;
            int maxi = arr[0];                                  better approach 1
            for(int i=0; i<n; i++){
                maxi=Math.max(maxi,arr[i]);
            }
            int[]hash=new int[maxi+1];
            for(int i=0; i<n; i++){
                hash[arr[i]]++;

            }
            for(int i=0; i<n;i++){
                if(hash[arr[i]]==1)
                return arr[i];
            }
            return -1;

        }*/
        public static int getsingleElement(int []arr){
            int n=arr.length;

            hashmap<Integer,Integer>mpp=new hashmap<>();
            for(int i=0; i<n; i++){
                int value=mpp.getOrDefault(arr[i],0);
                mpp.put(arr[i],value+1);
            }
            for(map.entry<Integer,Integer>it: mpp.entry.set()){
                if(it.getValue()==1){
                    return it.getKey();
                }
            }
            return -1;

        }

        
    public static void main(String[] args) {
        int[]arr={4,1,2,1,2};
        int ans=getsingleElement(arr);
        System.out.println("the single element is " +ans );
    }
    
}
