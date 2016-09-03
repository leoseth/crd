describe('list of shopping unitary', function () {

    describe('ListofShoppingController', function () {
        beforeEach(function () {
            this.$scope = {};
            this.controller = new ListofShoppingController(this.$scope);
        });

        it('must create "items" with 2 items', function () {
            expect(this.$scope.itens.length).toBe(2);
        });

        describe('addItem', function () {
            it('You must add a new item to the list of scope data', function () {
                this.$scope.item = {};
                this.$scope.item.product = 'Meat';
                this.$scope.item.quantity = 5;
                this.$scope.addsItem();
                expect(this.$scope.itens.length).toBe(3);
                expect(this.$scope.itens[2].product).toBe('Meat');
                expect(this.$scope.itens[2].quantity).toBe(5);
                expect(this.$scope.itens[2].compare).toBeFalse;
            });
        });

    });
});
