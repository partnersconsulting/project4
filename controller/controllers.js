angular.module("App.controllers", [])
    .controller("HomeController", function($scope, $rootScope, $location, $window) {

        /*$scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
        $scope.data = [300, 500, 100];

*/




        $rootScope.menu = [{
                name: "Novo Pedido",
                icon: "fa-plus",
                link: "/cadastro_pedido"
                    /*subs: [{
                        name: "sub1",
                        icon: "fa-home",
                        link: "/link-sub1",
                    }, {
                        name: "sub2",
                        icon: "fa-envelope",
                        link: "/link-sub2",
                    }, {
                        name: "sub3",
                        icon: "fa-cog",
                        link: "/link-sub3",
                    }]*/
            }, {
                name: "Feed",
                icon: "fa-history",
                link: "https://my330686.crm.ondemand.com/sap/public/ap/ui/repository/SAP_UI/HTML5/newclient.html?app.component=/SAP_UI_CT/Main/root.uiccwoc&rootWindow=X&redirectUrl=/sap/public/ap/ui/runtime&sap-ui-language=pt#Nav/1/eyJiSXNTaG93bkFzV29jVmlldyI6dHJ1ZSwidGFyZ2V0IjoiL0JZRF9DT0QvVUlJbmZyYXN0cnVjdHVyZS9GRUVEL0NPRF9GRUVEX1dDVklFVy5XQ1ZJRVcudWl3b2N2aWV3Iiwid2luSWQiOiJjZWMyMmI4M2RiYjcyODFlZjQ2ZmVhNjg0ZjhjZjEwNiJ9",
            }, {
                name: "Calendário",
                icon: "fa-calendar",
                link: "https://my330686.crm.ondemand.com/sap/public/ap/ui/repository/SAP_UI/HTML5/newclient.html?app.component=/SAP_UI_CT/Main/root.uiccwoc&rootWindow=X&redirectUrl=/sap/public/ap/ui/runtime&sap-ui-language=pt#Nav/1/eyJ0YXJnZXQiOiIvQllEX0NPRC9TYWxlc09uRGVtYW5kL0FjdGl2aXRpZXMvQ2FsZW5kYXJWaWV3L01vYmlsZUNhbGVuZGFyX09XTC5PV0wudWljb21wb25lbnQiLCJ3aW5JZCI6IkNBTEVOREFSIn0=",
            }, {
                name: "Clientes",
                icon: "fa-users",
                link: "https://my330686.crm.ondemand.com/sap/public/ap/ui/repository/SAP_UI/HTML5/newclient.html?app.component=/SAP_UI_CT/Main/root.uiccwoc&rootWindow=X&redirectUrl=/sap/public/ap/ui/runtime&sap-ui-language=pt#Nav/1/eyJiSXNTaG93bkFzV29jVmlldyI6dHJ1ZSwidGFyZ2V0IjoiL0JZRF9DT0QvU2FsZXNPbkRlbWFuZC9BY2NvdW50L1VJL0NPRF9BY2NvdW50X1dDVi5XQ1ZJRVcudWl3b2N2aWV3Iiwid2luSWQiOiIzYzkwNzdmNmU3YjhkOGNmY2Y2Mzk4N2E3YTBhNmQ3OSJ9",
            }, {
                name: "Visitas",
                icon: "fa-share-alt",
                link: "https://my330686.crm.ondemand.com/sap/public/ap/ui/repository/SAP_UI/HTML5/newclient.html?app.component=/SAP_UI_CT/Main/root.uiccwoc&rootWindow=X&redirectUrl=/sap/public/ap/ui/runtime&sap-ui-language=pt#Nav/1/eyJiSXNTaG93bkFzV29jVmlldyI6dHJ1ZSwidGFyZ2V0IjoiL0JZRF9DT0QvU2FsZXNPbkRlbWFuZC9WaXNpdC9WaXNpdEV4ZWN1dGlvbi9DT0RfVmlzaXRfV0NWSUVXLldDVklFVy51aXdvY3ZpZXciLCJ3aW5JZCI6IjFhNWZlZDYxYzQwOGE3MmMzZDQ4MjExMmNiNWQyMDM0In0=",
            }


        ];

        $rootScope.activeMenu = $rootScope.menu;

        $rootScope.openSub = function(sub) {
            // $rootScope.activeMenu = sub;

            var res = sub.link.match(/http/g);
            if (res && res.length > 0) {
                $window.open(sub.link);
            } else {
                $location.path(sub.link);
            }

        }

    })
    .controller("PedidosController", function($scope, $rootScope, $uibModal) {

        $rootScope.itemPedido = {};

        $rootScope.selectedHistoric = null;

        $rootScope.selectedClient = null;


        $rootScope.clear = function() {
            console.log("XXX clear()");

            $rootScope.showMarcas = true;
            $rootScope.showFamilias = false;
            $rootScope.buttonAdd = true;
            $rootScope.selectedProduct = '';
            $rootScope.marca = '';
            $rootScope.familia = '';

            $rootScope.itemPedido = {};
        }

        $rootScope.clear();

        /*$rootScope.precoComDesconto = $rootScope.itemPedido.desconto * $rootScope.selectedProduct;*/
        //$rootScope.produtos = [{


        $rootScope.closeHistoric = function() {
            $rootScope.selectedHistoric = null;
        }

        $rootScope.abrirHistorico = function() {
            $scope.open('lg', '', 'view/modal/historico.html', '');
        }


        $rootScope.selectHistoric = function(historic) {
            $rootScope.selectedHistoric = historic;
        }

        $rootScope.novoItemPedido = function() {
            console.log("novoItemPedido()");

            $scope.open('md', '', 'view/modal/novo-item.html', '');

            //$rootScope.buttonAdd = false;
            //$rootScope.showMarcas = true;
        }

        $rootScope.removerItem = function(itemPedido) {
            console.log(itemPedido.id);



            var index = $rootScope.itensPedido.indexOf(itemPedido);
            $rootScope.itensPedido.splice(index, 1);



       





        }   

        $rootScope.concluirPedido = function() {
            $scope.open('md', '', 'view/modal/pedido-concluido.html', '');
             $rootScope.selectedClient = null;
             $rootScope.clear();
            
        }
        $rootScope.selecionaMarca = function(marca) {
            console.log("selecionaMarca()" + marca.name);
            if (marca.familia) {
                $rootScope.marca = marca;
                $rootScope.showMarcas = false;
                $rootScope.showFamilias = true;
            }
        }
        $rootScope.selecionaFamilia = function(familia) {
            console.log("selecionaFamilia()" + familia.name);
            if (familia.produtos) {
                $rootScope.showFamilias = false;
                $rootScope.showProdutos = true;
                $rootScope.familia = familia;
            }
        }

        $rootScope.selecionaMaisVendido = function(produto) {
            $rootScope.selectedProduct = produto;
            $rootScope.showProdutos = false;
            $rootScope.showMarcas = false;
            $rootScope.showFamilias = true;
            $scope.open('md', '', 'view/modal/novo-item.html', '');

        }
        $rootScope.selecionaProduto = function(produto) {
            $rootScope.selectedProduct = produto;
            $rootScope.showProdutos = false;
            console.log("selecionaProduto()" + produto.name);
        }

        $rootScope.adicionarMix = function() {
            console.log('adicionar mix');
            angular.forEach($rootScope.selectedClient.listaMix.items, function(value, key) {
                $rootScope.adicionarNoPedido(value);
            });

            $rootScope.selectedClient.listaMix.items = [];
        }

        $rootScope.totalItems = 0;
        $rootScope.valorTotal = 0;

        $rootScope.adicionarNoPedido = function(item) {
            $rootScope.itensPedido.push(item);
            $rootScope.totalItems = $rootScope.totalItems + Number(item.quantidade);
            $rootScope.valorTotal = $rootScope.valorTotal + Number(item.quantidade * item.price);
        }


        $scope.open('md', '', 'view/modal/cliente.html', '');
    })
    .controller("ModalInstanceCtrl", function($scope, $rootScope, $uibModalInstance) {


        $scope.reloadPedido = function() {

            angular.forEach($rootScope.selectedHistoric.items, function(value, key) {
                $rootScope.adicionarNoPedido(value);
            });



            $uibModalInstance.dismiss('cancel');
        }

        $scope.adicionar = function() {

            var item = {
                id: "200700" + $rootScope.itensPedido.length,
                name: $rootScope.selectedProduct.name,
                sku: $rootScope.selectedProduct.sku,
                quantidade: $rootScope.itemPedido.qnt,
                price: $rootScope.selectedProduct.price,
                impostos: 1.22,
                desconto: $rootScope.itemPedido.desconto / 100
            };

            $rootScope.adicionarNoPedido(item);



            $uibModalInstance.dismiss('cancel');
        }




        $scope.ok = function() {
            console.log("ok()");
            $rootScope.clear();
            $uibModalInstance.close();
        };

        $scope.cancel = function() {
            console.log("cancel()");
            $rootScope.clear();
            $uibModalInstance.dismiss('cancel');
        };

        $scope.selectClient = function(client) {
            console.log("selectClient()");
            $uibModalInstance.dismiss('cancel');

            $rootScope.selectedClient = client;
        }
    })
    .controller("MainController", function($scope, $rootScope, $filter, $uibModal, $document, $location) {


        $scope.open = function(size, parentSelector, page, tipo) {

            var r = '?n=' + Math.random();

            var parentElem = parentSelector ?
                angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: page + r,
                controller: 'ModalInstanceCtrl',
                controllerAs: '$ctrl',
                size: size,
                appendTo: parentElem,
                resolve: {
                    items: function() {
                        return [];
                    }
                }
            });

            /*modalInstance.result.then(function(selectedItem) {

                console.log('true ' + tipo);
            }, function() {
                if (tipo == 'cotacao') {
                    $location.path("/cotacoes");
                } else if (tipo == 'pedido') {
                    $location.path("/pedidos");
                }
                $rootScope.clearPedido();
            });*/
        };


        $rootScope.dataValidade = function(date) {
            if (date) {
                var newDate = new Date(new Date(date).setMonth(date.getMonth() + 6));
                return $filter('date')(newDate, "dd/MM/yyyy");;
            }
        }

        $rootScope.newDate = new Date();


        var historic = [{
            number: "20171112",
            date: "01/01/2017",
            items: [
                { "id": "2007000", "name": "Pano Multiuso Perfex", "sku": "SKU20170142", "quantidade": "10", "price": 6.55, "impostos": 1.22, "desconto": 0 },
                { "id": "2007001", "name": "Ype sabão em pó 500g", "sku": "SKU20170142", "quantidade": "10", "price": 1.55, "impostos": 1.22, "desconto": 0 },
                { "id": "2007002", "name": "Ype Lava Roupas", "sku": "SKU20170142", "quantidade": "10", "price": 2.55, "impostos": 1.22, "desconto": 0 },
                { "id": "2007003", "name": "Ype barra 200g", "sku": "SKU20170142", "quantidade": "10", "price": 4.55, "impostos": 1.22, "desconto": 0 },
                { "id": "2007004", "name": "Agua Sanitaria 5l", "sku": "SKU20170142", "quantidade": "50", "price": 3.55, "impostos": 1.22, "desconto": 0 }
            ]
        }, {
            number: "20171189",
            date: "15/01/2017",
            items: [
                { "id": "2007000", "name": "Agua Sanitaria 5l", "sku": "SKU20170142", "quantidade": "15", "price": 3.55, "impostos": 1.22, "desconto": 0.005 },
                { "id": "2007001", "name": "Ype Lava Roupas", "sku": "SKU20170142", "quantidade": "50", "price": 2.55, "impostos": 1.22, "desconto": 0.045 }
            ]
        }, {
            number: "20171199",
            date: "30/01/2017",
            items: [
                { "id": "2007000", "name": "Lava Louça Ype 5l neutro", "sku": "SKU20170142", "quantidade": 40, "price": 13.55, "impostos": 1.22, "desconto": 0.04 },
                { "id": "2007001", "name": "Lava Louça Ype 5l clear", "sku": "SKU20170142", "quantidade": "50", "price": 12.55, "impostos": 1.22, "desconto": 0 },
                { "id": "2007002", "name": "Ype sabão em pó 500g", "sku": "SKU20170142", "quantidade": 30, "price": 1.55, "impostos": 1.22, "desconto": 0.085 }
            ]
        }, {
            number: "20171222",
            date: "15/02/2017",
            items: [
                { "id": "2007000", "name": "Pano Multiuso Perfex", "sku": "SKU20170142", "quantidade": 20, "price": 6.55, "impostos": 1.22, "desconto": 0.03 },
                { "id": "2007001", "name": "Ype Clear", "sku": "SKU20170002", "quantidade": 40, "price": 4.55, "impostos": 1.22, "desconto": 0 }
            ]
        }];

        var credito = {
            total: "R$ 50.000,00",
            livre: "R$ 20.000,00",
            comprometido: "R$ 30.000,00",
            liberar: {
                total: "R$ 10.000,00",
                faturas: [{
                    code: "3232",
                    data: "22/04",
                    valor: "R$ 3.500,00"
                }, {
                    code: "3256",
                    data: "28/04",
                    valor: "R$ 1.000,00"
                }, {
                    code: "3359",
                    data: "30/04",
                    valor: "R$ 5.500,00"
                }]
            }
        }

        var listaMix = {
            name: "Mix perfeito",
            items: [{
                id: "200700055",
                sku: 'SKU20170042',
                quantidade: 1,
                impostos: 1.22,
                price: 1.27,
                desconto: .3,
                name: "Detergente Ypê 5l"
            }, {
                id: "200700051",
                sku: 'SKU20170984',
                quantidade: 5,
                impostos: 1.42,
                price: 2.99,
                desconto: .3,
                name: "Desinfetante 1l"
            }, {
                id: "200700089",
                sku: 'SKU20170499',
                quantidade: 8,
                impostos: 1.92,
                price: 4.90,
                desconto: .3,
                name: "Multiuso Ypê"
            }, {
                id: "200700099",
                sku: 'SKU20170142',
                quantidade: 10,
                impostos: 1.51,
                price: 3.77,
                desconto: .3,
                name: "Sabão barra 100g"
            }]
        };


        $rootScope.listaClientes = [{
                code: '2017011',
                name: 'Grupo Pão de Açucar',
                address: "Av. Brigadeiro Luiz Antonio, 21 - Bela vista - São Paulo - SP",
                historic: historic,
                listaMix: listaMix,
                credito: credito
            }, {
                code: '2017012',
                name: 'Covabra Supermecados',
                address: "Rua Macuco, 200 - Moema - São Paulo - SP",
                historic: historic,
                listaMix: listaMix,
                credito: credito
            }, {
                code: '2017013',
                name: 'Sam`s Club',
                address: "Av Bandeirantes, km 20 - São Paulo - SP",
                historic: historic,
                listaMix: listaMix,
                credito: credito
            }, {
                code: '2017014',
                name: 'Walmart',
                address: "Radial Leste, 2000 - Tatuapé - São Paulo - SP",
                historic: historic,
                listaMix: listaMix,
                credito: credito
            }, {
                code: '2017015',
                name: 'Makro',
                address: "Rodovia Dutra km 40 - São Paulo - SP",
                historic: historic,
                listaMix: listaMix,
                credito: credito
            }, {
                code: '2017016',
                name: 'Delben Supermercados',
                address: "Av. Brigadeiro Luiz Antonio, 21 - Bela vista - São Paulo - SP",
                historic: historic,
                listaMix: listaMix,
                credito: credito
            }, {
                code: '2017017',
                name: 'Cliente Supermercados 1',
                address: "Rua Macuco, 200 - Moema - São Paulo - SP",
                historic: historic,
                listaMix: listaMix,
                credito: credito
            }, {
                code: '2017018',
                name: 'Cliente Supermercados 2',
                address: "Av Bandeirantes, km 20 - São Paulo - SP",
                historic: historic,
                listaMix: listaMix,
                credito: credito
            }, {
                code: '2017019',
                name: 'Cliente Supermercados 3',
                address: "Radial Leste, 2000 - Tatuapé - São Paulo - SP",
                historic: historic,
                listaMix: listaMix,
                credito: credito
            }

        ];

        $rootScope.maisVendidos = [{
                id: "200700099",
                sku: 'SKU20170142',
                impostos: 1.51,
                desconto: .1,
                name: 'Agua Sanitaria 5l',
                image: 'images/produto/agua-5l-2016.png',
                price: 3.55
            }, {
                id: "200700099",
                sku: 'SKU20170142',
                impostos: 1.51,
                desconto: .1,
                name: 'Ype barra 200g',
                image: 'images/produto/barra-neutro-2016.jpg',
                price: 4.55
            }, {
                id: "200700099",
                sku: 'SKU20170142',
                impostos: 1.51,
                desconto: .1,
                name: 'Assolan la de aço',
                image: 'images/produto/La_de_Aco_Assolan.png',
                price: 5.55
            }, {
                id: "200700099",
                sku: 'SKU20170142',
                impostos: 2.51,
                desconto: .1,
                name: 'Pano Multiuso Perfex',
                image: 'images/produto/Pano Multiuso_Perfex Azul.png',
                price: 6.55
            }, {
                id: "200700099",
                sku: 'SKU20170142',
                impostos: 0.51,
                desconto: .1,
                name: 'Ype sabão em pó 500g',
                image: 'images/produto/YpePremiumReg-500g-Lateral-Esq-2013.png',
                price: 1.55
            }, {
                id: "200700099",
                sku: 'SKU20170142',
                impostos: 0.91,
                desconto: .1,
                name: 'Ype Lava Roupas',
                image: 'images/produto/Ypremium_Novo_Baixa.png',
                price: 2.55
            }, {
                id: "200700099",
                sku: 'SKU20170142',
                impostos: 4.51,
                desconto: .1,
                name: 'Lava Louça Ype 5l clear',
                image: 'images/produto/louca-ype-5l-clear-2016.jpg',
                price: 12.55
            }, {
                id: "200700099",
                sku: 'SKU20170142',
                impostos: 4.51,
                desconto: .1,
                name: 'Lava Louça Ype 5l neutro',
                image: 'images/produto/louca-ype-5l-neutro-2016.png',
                price: 13.55
            }

        ];


        $rootScope.itensPedido = [];

        $rootScope.produtos = [{
            name: 'assolan',
            image: 'images/marcas/marca_assolan.webp',
        }, {
            name: 'atol',
            image: 'images/marcas/marca_atol.webp',
        }, {
            name: 'perfex',
            image: 'images/marcas/marca_perfex.webp',
        }, {
            name: 'tixan',
            image: 'images/marcas/marca_tixan.webp',
        }, {
            name: 'ype',
            image: 'images/marcas/marca_ype.webp',
            familia: [{
                    name: 'cloro_gel',
                    image: 'images/familia/cloro_gel_thumb.webp'
                }, {
                    name: 'cross',
                    image: 'images/familia/cross_thumb.webp'
                }, {
                    name: 'aguasanitaria',
                    image: 'images/familia/produto_aguasanitaria.webp'
                }, {
                    name: 'amaciantes',
                    image: 'images/familia/produto_amaciantes.webp'
                }, {
                    name: 'amaciantes_concentrado',
                    image: 'images/familia/produto_amaciantes_concentrado.webp'
                }, {
                    name: 'desinfetante',
                    image: 'images/familia/produto_desinfetante.webp'
                }, {
                    name: 'lavalouca',
                    image: 'images/familia/produto_lavalouca.webp',
                    produtos: [{
                            name: 'Ype Clear Care',
                            sku: 'SKU20170001',
                            image: 'images/produto/LL Ype Clear Care_novo.png',
                            price: 3.55
                        }, {
                            name: 'Ype Clear',
                            sku: 'SKU20170002',
                            image: 'images/produto/LL Ype Clear_novo.png',
                            price: 4.55
                        }, {
                            name: 'Ype Coco',
                            sku: 'SKU20170003',
                            image: 'images/produto/LL Ype Coco_novo.png',
                            price: 5.55
                        }, {
                            name: 'Ype Limao',
                            sku: 'SKU20170004',
                            image: 'images/produto/LL Ype Limao_novo.png',
                            price: 6.55
                        }, {
                            name: 'Ype Maca PET',
                            sku: 'SKU20170005',
                            image: 'images/produto/LL Ype Maca PET novo.png',
                            price: 1.55
                        }, {
                            name: 'Ype Neutro',
                            sku: 'SKU20170006',
                            image: 'images/produto/LL Ype Neutro_novo.png',
                            price: 2.55
                        }

                    ]
                }, {
                    name: 'lustramoveis',
                    image: 'images/familia/produto_lustramoveis.webp'
                }, {
                    name: 'multiuso',
                    image: 'images/familia/produto_multiuso.webp'
                }, {
                    name: 'sabaoembarra',
                    image: 'images/familia/produto_sabaoembarra.webp'
                }, {
                    name: 'saboneteaction',
                    image: 'images/familia/produto_saboneteaction.webp'
                }, {
                    name: 'saboneteluxo',
                    image: 'images/familia/produto_saboneteluxo.webp'
                }, {
                    name: 'sabonetesuave',
                    image: 'images/familia/produto_sabonetesuave.webp'
                }, {
                    name: 'ypepremium',
                    image: 'images/familia/produto_ypepremium.webp'
                }

            ]
        }];



        $rootScope.linksHome = [{
            title: "Atividades",
            list: [{
                title: "Atividades em Aberto",
                icon: 'fa-calendar',
                link: "https://my330686.crm.ondemand.com/sap/public/ap/ui/repository/SAP_UI/HTML5/newclient.html?app.component=/SAP_UI_CT/Main/root.uiccwoc&rootWindow=X&redirectUrl=/sap/public/ap/ui/runtime&sap-ui-language=pt#Nav/1/eyJiSXNTaG93bkFzV29jVmlldyI6dHJ1ZSwidGFyZ2V0IjoiL0JZRF9DT0QvVUlJbmZyYXN0cnVjdHVyZS9GRUVEL0NPRF9GRUVEX1dDVklFVy5XQ1ZJRVcudWl3b2N2aWV3Iiwid2luSWQiOiJjZWMyMmI4M2RiYjcyODFlZjQ2ZmVhNjg0ZjhjZjEwNiJ9",
                image: "images/kpi1.png",
                target: '_blank'
            }, {
                title: "Próximas Visitas",
                icon: 'fa-pencil-square-o',
                link: "https://my330686.crm.ondemand.com/sap/public/ap/ui/repository/SAP_UI/HTML5/newclient.html?app.component=/SAP_UI_CT/Main/root.uiccwoc&rootWindow=X&redirectUrl=/sap/public/ap/ui/runtime&sap-ui-language=pt#Nav/1/eyJiSXNTaG93bkFzV29jVmlldyI6dHJ1ZSwidGFyZ2V0IjoiL0JZRF9DT0QvVUlJbmZyYXN0cnVjdHVyZS9GRUVEL0NPRF9GRUVEX1dDVklFVy5XQ1ZJRVcudWl3b2N2aWV3Iiwid2luSWQiOiJjZWMyMmI4M2RiYjcyODFlZjQ2ZmVhNjg0ZjhjZjEwNiJ9",
                image: "images/kpi2.png",
                target: '_blank'
            }, {
                title: "Minhas Tarefas",
                icon: 'fa-pencil-square-o',
                link: "https://my330686.crm.ondemand.com/sap/public/ap/ui/repository/SAP_UI/HTML5/newclient.html?app.component=/SAP_UI_CT/Main/root.uiccwoc&rootWindow=X&redirectUrl=/sap/public/ap/ui/runtime&sap-ui-language=pt#Nav/1/eyJiSXNTaG93bkFzV29jVmlldyI6dHJ1ZSwidGFyZ2V0IjoiL0JZRF9DT0QvVUlJbmZyYXN0cnVjdHVyZS9GRUVEL0NPRF9GRUVEX1dDVklFVy5XQ1ZJRVcudWl3b2N2aWV3Iiwid2luSWQiOiJjZWMyMmI4M2RiYjcyODFlZjQ2ZmVhNjg0ZjhjZjEwNiJ9",
                image: "images/kpi3.png",
                target: '_blank'
            }]
        }, {
            title: "Relatorios Pedidos",
            list: [{
                title: "Pedidos Faturado x Meta",
                icon: 'fa-calendar',
                link: "https://my330686.crm.ondemand.com/sap/public/ap/ui/repository/SAP_UI/HTML5/newclient.html?app.component=/SAP_UI_CT/Main/root.uiccwoc&rootWindow=X&redirectUrl=/sap/public/ap/ui/runtime&sap-ui-language=pt#Nav/1/eyJiSXNTaG93bkFzV29jVmlldyI6dHJ1ZSwidGFyZ2V0IjoiL0JZRF9DT0QvVUlJbmZyYXN0cnVjdHVyZS9GRUVEL0NPRF9GRUVEX1dDVklFVy5XQ1ZJRVcudWl3b2N2aWV3Iiwid2luSWQiOiJjZWMyMmI4M2RiYjcyODFlZjQ2ZmVhNjg0ZjhjZjEwNiJ9",
                image: "images/kpi4.png",
                target: '_blank'
            }, {
                title: "Valores em Aberto",
                icon: 'fa-pencil-square-o',
                link: "https://my330686.crm.ondemand.com/sap/public/ap/ui/repository/SAP_UI/HTML5/newclient.html?app.component=/SAP_UI_CT/Main/root.uiccwoc&rootWindow=X&redirectUrl=/sap/public/ap/ui/runtime&sap-ui-language=pt#Nav/1/eyJiSXNTaG93bkFzV29jVmlldyI6dHJ1ZSwidGFyZ2V0IjoiL0JZRF9DT0QvVUlJbmZyYXN0cnVjdHVyZS9GRUVEL0NPRF9GRUVEX1dDVklFVy5XQ1ZJRVcudWl3b2N2aWV3Iiwid2luSWQiOiJjZWMyMmI4M2RiYjcyODFlZjQ2ZmVhNjg0ZjhjZjEwNiJ9",
                image: "images/kpi5.png",
                target: '_blank'
            }, {
                title: "Previsão Faturado x Aberto",
                icon: 'fa-pencil-square-o',
                link: "https://my330686.crm.ondemand.com/sap/public/ap/ui/repository/SAP_UI/HTML5/newclient.html?app.component=/SAP_UI_CT/Main/root.uiccwoc&rootWindow=X&redirectUrl=/sap/public/ap/ui/runtime&sap-ui-language=pt#Nav/1/eyJiSXNTaG93bkFzV29jVmlldyI6dHJ1ZSwidGFyZ2V0IjoiL0JZRF9DT0QvVUlJbmZyYXN0cnVjdHVyZS9GRUVEL0NPRF9GRUVEX1dDVklFVy5XQ1ZJRVcudWl3b2N2aWV3Iiwid2luSWQiOiJjZWMyMmI4M2RiYjcyODFlZjQ2ZmVhNjg0ZjhjZjEwNiJ9",
                image: "images/kpi6.png",
                target: '_blank'
            }]
        }, {
            title: "Relatorios Vendas",
            list: [{
                title: "Venda por Familia de Produto",
                icon: 'fa-calendar',
                link: "https://my330686.crm.ondemand.com/sap/public/ap/ui/repository/SAP_UI/HTML5/newclient.html?app.component=/SAP_UI_CT/Main/root.uiccwoc&rootWindow=X&redirectUrl=/sap/public/ap/ui/runtime&sap-ui-language=pt#Nav/1/eyJiSXNTaG93bkFzV29jVmlldyI6dHJ1ZSwidGFyZ2V0IjoiL0JZRF9DT0QvVUlJbmZyYXN0cnVjdHVyZS9GRUVEL0NPRF9GRUVEX1dDVklFVy5XQ1ZJRVcudWl3b2N2aWV3Iiwid2luSWQiOiJjZWMyMmI4M2RiYjcyODFlZjQ2ZmVhNjg0ZjhjZjEwNiJ9",
                image: "images/kpi7.png",
                target: '_blank'
            }, {
                title: "Receita de Vendas por Cliente",
                icon: 'fa-pencil-square-o',
                link: "https://my330686.crm.ondemand.com/sap/public/ap/ui/repository/SAP_UI/HTML5/newclient.html?app.component=/SAP_UI_CT/Main/root.uiccwoc&rootWindow=X&redirectUrl=/sap/public/ap/ui/runtime&sap-ui-language=pt#Nav/1/eyJiSXNTaG93bkFzV29jVmlldyI6dHJ1ZSwidGFyZ2V0IjoiL0JZRF9DT0QvVUlJbmZyYXN0cnVjdHVyZS9GRUVEL0NPRF9GRUVEX1dDVklFVy5XQ1ZJRVcudWl3b2N2aWV3Iiwid2luSWQiOiJjZWMyMmI4M2RiYjcyODFlZjQ2ZmVhNjg0ZjhjZjEwNiJ9",
                image: "images/kpi1.png",
                target: '_blank'
            }, {
                title: "Cotas Promocionais por Cliente",
                icon: 'fa-pencil-square-o',
                link: "https://my330686.crm.ondemand.com/sap/public/ap/ui/repository/SAP_UI/HTML5/newclient.html?app.component=/SAP_UI_CT/Main/root.uiccwoc&rootWindow=X&redirectUrl=/sap/public/ap/ui/runtime&sap-ui-language=pt#Nav/1/eyJiSXNTaG93bkFzV29jVmlldyI6dHJ1ZSwidGFyZ2V0IjoiL0JZRF9DT0QvVUlJbmZyYXN0cnVjdHVyZS9GRUVEL0NPRF9GRUVEX1dDVklFVy5XQ1ZJRVcudWl3b2N2aWV3Iiwid2luSWQiOiJjZWMyMmI4M2RiYjcyODFlZjQ2ZmVhNjg0ZjhjZjEwNiJ9",
                image: "images/kpi2.png",
                target: '_blank'
            }]
        }]
    });
