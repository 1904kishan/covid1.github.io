const URL = "https://covid19.mathdro.id/api/";
let app = angular.module("MyApp", []);
app.controller("MyCtrl", ($scope,$http) =>
{
     $scope.title = "Stay Home Stay Safe";
     console.log("app loaded");
     //calling app
     $http.get(URL).then
     (
        (response)=>
        {
            console.log(response);
            $scope.all_data=response.data;
        },
        (error)=>
        {
            console.log(errors);
        }
       );
        //get country


        $scope.get_c_data = () =>
         {
            let country=$scope.c;
            if(country=="")
            {
                return;
            }
            
            $http.get('${URL}/countries/${country}').then
             (
                 (response)=>
             {
                 console.log(response.data);
                 $scope.c_data = response.data;
             },
             (error)=>
             {
                 console.log(errors);
             }
            )
         };  
          
});