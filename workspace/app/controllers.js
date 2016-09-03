function ListofShoppingController($scope) {

    $scope.item = {};

    $scope.itens = [
        {product: 'watch', quantity: 2, compare: false},
        {product: 'cellphone', quantity: 12, compare: false}
    ];

    $scope.addItem = function () {
        alert('this is add');
        $scope.itens.push({product: $scope.item.product, quantity: $scope.item.quantity, compare: false});
        $scope.item.product = $scope.item.quantity = '';
        toastr.success("Item added successfully.");
    };

    $scope.editItem = function (index) {
        alert('this is edit');
        $scope.item = $scope.itens[index];
        $scope.edit = true;
    };

    $scope.applyChanges = function(index){
        $scope.item = {};
        $scope.edit = false;
        toastr.success("Item changed successfully.");
    };

    $scope.deleteItem = function (index) {
        alert('this is delete');
        $scope.itens.splice(index, 1);
        toastr.success("Item removed successfully");
    };
}