angular.module("App.controllers", [])
    .controller("HomeController", function($scope, $rootScope) {

        /*$scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
        $scope.data = [300, 500, 100];

*/


        $rootScope.menu = [{
                name: "menu1",
                icon: "fa-plus",
                subs: [{
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
                }]
            }, {
                name: "menu2",
                icon: "fa-history",
                link: "/link2",
            }, {
                name: "menu3",
                icon: "fa-bars",
                link: "/link3",
            }, {
                name: "menu3",
                icon: "fa-bars",
                link: "/link3",
            }, {
                name: "menu3",
                icon: "fa-bars",
                link: "/link3",
            }, {
                name: "menu3",
                icon: "fa-bars",
                link: "/link3",
            }, {
                name: "menu3",
                icon: "fa-bars",
                link: "/link3",
            }, {
                name: "menu3",
                icon: "fa-bars",
                link: "/link3",
            }, {
                name: "menu3",
                icon: "fa-bars",
                link: "/link3",
            }, {
                name: "menu3",
                icon: "fa-bars",
                link: "/link3",
            }

        ];

        $rootScope.activeMenu = $rootScope.menu;

        $rootScope.openSub = function(sub) {
            $rootScope.activeMenu = sub;
        }

    })
    .controller("PedidosController", function($scope, $rootScope, $uibModal) {
        $rootScope.showMarcas = true;
        $rootScope.showFamilias = false;
        $rootScope.buttonAdd = true;
        $rootScope.marca = '';
        $rootScope.familia = '';

        //$rootScope.produtos = [{

        $scope.novoItemPedido = function() {


        $scope.open('md', '', 'view/modal/novo-item.html', '');

            //$rootScope.buttonAdd = false;
            //$rootScope.showMarcas = true;
        }
        $scope.selecionaMarca = function(marca) {
            if (marca.familia) {
                $rootScope.marca = marca;
                $rootScope.showMarcas = false;
                $rootScope.showFamilias = true;
            }
        }
        $scope.selecionaFamilia = function(familia) {
            if (familia.produtos) {
                $rootScope.showFamilias = false;
                $rootScope.showProdutos = true;
                $rootScope.familia = familia;
            }
        }



        $scope.open('md', '', 'view/modal/cliente.html', '');
    })
    .controller("ModalInstanceCtrl", function($scope, $rootScope, $uibModalInstance) {
        $scope.ok = function() {
            $uibModalInstance.close();
        };

        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };

        $scope.selectClient = function(client) {
            $uibModalInstance.dismiss('cancel');

            $rootScope.selectedClient = client;
        }
    })
    .controller("MainController", function($scope, $rootScope, $filter, $uibModal, $document, $location) {


        $scope.open = function(size, parentSelector, page, tipo) {

            var parentElem = parentSelector ?
                angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: page,
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
            date: "01/01/2017"
        }, {
            number: "20171189",
            date: "15/01/2017"
        }, {
            number: "20171199",
            date: "30/01/2017"
        }, {
            number: "20171222",
            date: "15/02/2017"
        }, {
            number: "20171333 ",
            date: "30/02/2017"
        }];

        var credito = {
            total: "R$ 50.000,00",
            livre: "R$ 20.000,00",
            comprometido: "R$ 30.000,00",
            liberar: {
                total: "R$ 10.000,00",
                faturas: [
                    {
                        code: "3232",
                        data: "22/04",
                        valor: "R$ 3.500,00"
                    },
                    {
                        code: "3256",
                        data: "28/04",
                        valor: "R$ 1.000,00"
                    },
                    {
                        code: "3359",
                        data: "30/04",
                        valor: "R$ 5.500,00"
                    }
                ]
            }
        }

        var listaMix = {
            name: "Mix perfeito",
            items: [{
                quantidade: "01 cx",
                name: "Detergente Ypê 5l"
            }, {
                quantidade: "05 cx",
                name: "Desinfetante 1l"
            }, {
                quantidade: "08 un",
                name: "Multiuso Ypê"
            }, {
                quantidade: "01 un",
                name: "Sabão barra 100g"
            }]
        };

        $rootScope.listaClientes = [
            { code: '2017011', name: 'Grupo Pão de Açucar', historic: historic, listaMix:listaMix, credito:credito },
            { code: '2017012', name: 'Covabra Supermecados', historic: historic, listaMix:listaMix, credito:credito },
            { code: '2017013', name: 'Sam`s Club', historic: historic, listaMix:listaMix, credito:credito },
            { code: '2017014', name: 'Walmart', historic: historic, listaMix:listaMix, credito:credito },
            { code: '2017015', name: 'Makro', historic: historic, listaMix:listaMix, credito:credito },
            { code: '2017016', name: 'Delben Supermercados', historic: historic, listaMix:listaMix, credito:credito },
            { code: '2017017', name: 'Cliente Supermercados 1', historic: historic, listaMix:listaMix, credito:credito },
            { code: '2017018', name: 'Cliente Supermercados 2', historic: historic, listaMix:listaMix, credito:credito },
            { code: '2017019', name: 'Cliente Supermercados 3', historic: historic, listaMix:listaMix, credito:credito }

        ];

        $rootScope.maisVendidos = [{
                name: 'Agua Sanitaria 5l',
                image: 'images/produto/agua-5l-2016.png',
                price: '3,55'
            }, {
                name: 'Ype barra 200g',
                image: 'images/produto/barra-neutro-2016.jpg',
                price: '4,55'
            }, {
                name: 'Assolan la de aço',
                image: 'images/produto/La_de_Aco_Assolan.png',
                price: '5,55'
            }, {
                name: 'Pano Multiuso Perfex',
                image: 'images/produto/Pano Multiuso_Perfex Azul.png',
                price: '6,55'
            }, {
                name: 'Ype sabão em pó 500g',
                image: 'images/produto/YpePremiumReg-500g-Lateral-Esq-2013.png',
                price: '1,55'
            }, {
                name: 'Ype Lava Roupas',
                image: 'images/produto/Ypremium_Novo_Baixa.png',
                price: '2,55'
            }, {
                name: 'Lava Louça Ype 5l clear',
                image: 'images/produto/louca-ype-5l-clear-2016.jpg',
                price: '12,55'
            }, {
                name: 'Lava Louça Ype 5l neutro',
                image: 'images/produto/louca-ype-5l-neutro-2016.png',
                price: '13,55'
            }

        ];


        $rootScope.itensPedido = [{
            id: "20170001",
            name: "prod ype 1",
            sku: "SKU20170001",
            quantidade: 10,
            precoUnitario: 3.15,
            impostos: 1.22,
            desconto: .112
        }, {
            id: "20170022",
            name: "prod ype 22",
            sku: "SKU20170022",
            quantidade: 15,
            precoUnitario: 2.15,
            impostos: 0.95,
            desconto: .155
        }, {
            id: "20170002",
            name: "prod ype 2",
            sku: "SKU20170002",
            quantidade: 5,
            precoUnitario: 9.55,
            impostos: 3.21,
            desconto: .059
        }, {
            id: "20170005",
            name: "prod ype 5",
            sku: "SKU20170005",
            quantidade: 20,
            precoUnitario: 2.98,
            impostos: 1.11,
            desconto: .079
        }, {
            id: "20170001",
            name: "prod ype 1",
            sku: "SKU20170001",
            quantidade: 10,
            precoUnitario: 3.15,
            impostos: 1.22,
            desconto: .112
        }, {
            id: "20170022",
            name: "prod ype 22",
            sku: "SKU20170022",
            quantidade: 15,
            precoUnitario: 2.15,
            impostos: 0.95,
            desconto: .155
        }, {
            id: "20170002",
            name: "prod ype 2",
            sku: "SKU20170002",
            quantidade: 5,
            precoUnitario: 9.55,
            impostos: 3.21,
            desconto: .059
        }, {
            id: "20170005",
            name: "prod ype 5",
            sku: "SKU20170005",
            quantidade: 20,
            precoUnitario: 2.98,
            impostos: 1.11,
            desconto: .079
        }, {
            id: "20170001",
            name: "prod ype 1",
            sku: "SKU20170001",
            quantidade: 10,
            precoUnitario: 3.15,
            impostos: 1.22,
            desconto: .112
        }, {
            id: "20170022",
            name: "prod ype 22",
            sku: "SKU20170022",
            quantidade: 15,
            precoUnitario: 2.15,
            impostos: 0.95,
            desconto: .155
        }, {
            id: "20170002",
            name: "prod ype 2",
            sku: "SKU20170002",
            quantidade: 5,
            precoUnitario: 9.55,
            impostos: 3.21,
            desconto: .059
        }, {
            id: "20170005",
            name: "prod ype 5",
            sku: "SKU20170005",
            quantidade: 20,
            precoUnitario: 2.98,
            impostos: 1.11,
            desconto: .079
        }];

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
                            image: 'images/produto/LL Ype Clear Care_novo.png',
                            price: '3,55'
                        }, {
                            name: 'Ype Clear',
                            image: 'images/produto/LL Ype Clear_novo.png',
                            price: '4,55'
                        }, {
                            name: 'Ype Coco',
                            image: 'images/produto/LL Ype Coco_novo.png',
                            price: '5,55'
                        }, {
                            name: 'Ype Limao',
                            image: 'images/produto/LL Ype Limao_novo.png',
                            price: '6,55'
                        }, {
                            name: 'Ype Maca PET',
                            image: 'images/produto/LL Ype Maca PET novo.png',
                            price: '1,55'
                        }, {
                            name: 'Ype Neutro',
                            image: 'images/produto/LL Ype Neutro_novo.png',
                            price: '2,55'
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
                link: "#/cadastro_evento",
                image: "images/kpi1.png",
                target: '_self'
            }, {
                title: "Próximas Visitas",
                icon: 'fa-pencil-square-o',
                link: "#/cadastro_evento",
                image: "images/kpi2.png",
                target: '_self'
            }, {
                title: "Minhas Tarefas",
                icon: 'fa-pencil-square-o',
                link: "#/cadastro_evento",
                image: "images/kpi3.png",
                target: '_self'
            }]
        }, {
            title: "Relatorios Pedidos",
            list: [{
                title: "Pedidos Faturado x Meta",
                icon: 'fa-calendar',
                link: "#/cadastro_evento",
                image: "images/kpi4.png",
                target: '_self'
            }, {
                title: "Valores em Aberto",
                icon: 'fa-pencil-square-o',
                link: "#/cadastro_evento",
                image: "images/kpi5.png",
                target: '_self'
            }, {
                title: "Previsão Faturado x Aberto",
                icon: 'fa-pencil-square-o',
                link: "#/cadastro_evento",
                image: "images/kpi6.png",
                target: '_self'
            }]
        }, {
            title: "Relatorios Vendas",
            list: [{
                title: "Venda por Familia de Produto",
                icon: 'fa-calendar',
                link: "#/cadastro_evento",
                image: "images/kpi7.png",
                target: '_self'
            }, {
                title: "Receita de Vendas por Cliente",
                icon: 'fa-pencil-square-o',
                link: "#/cadastro_evento",
                image: "images/kpi1.png",
                target: '_self'
            }, {
                title: "Cotas Promocionais por Cliente",
                icon: 'fa-pencil-square-o',
                link: "#/cadastro_evento",
                image: "images/kpi2.png",
                target: '_self'
            }]
        }]
    });
