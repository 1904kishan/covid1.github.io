const URL = "https://covid19.mathdro.id/api";

let app = angular.module('MyApp',[]);

app.controller('MyCtrl', ($scope, $http) => {
    // this is controller
    $scope.title = "Stay Home Stay Safe";

    // calling API
    $http.get(URL)
    .then((response) => {
        // Success
        console.log(response.data);
        $scope.all_data = response.data;
    }, (error) => {
        // Error
        console.log(error);
    });

    // Get Country Data
    $scope.get_c_data = () => {
        let country = $scope.c;
        if(country == "") {
            $scope.c_data = undefined;
            return;
        }
        $http.get(`${URL}/countries/${country}`)
        .then((response) => {
            console.log(response.data);
            $scope.c_data = response.data;
        }, (error) => {
            console.log(error);
        });
    };
});