angular.module("app.controllers", [])
    .controller("HomeController", function ($scope, $rootScope, $location, $window, $sce) {
        $rootScope.clear();

        /*
         $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
         $scope.data = [300, 500, 100];
         */





        $rootScope.itensPedido = [];
        $rootScope.menu = [{
            name: "Novo Pedido",
            icon: "fa-plus",
            link: "/cadastro_pedido"
        }, {
            name: "Plano de Negócio",
            icon: "fa-product-hunt",
            link: "/cadastro_plano"
        }, {
            name: "Feed",
            icon: "fa-rss-square",
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
        }, {
            name: "Indicadores de Vendas",
            icon: "fa-credit-card",
            link: "https://demo-presalesbrazil.us1.sapbusinessobjects.cloud/sap/fpa/ui/tenants/presalesbrazil/app.html#;view_id=story;storyId=0C3FE3585EBE2E44E10000000A6C988B;forceOpenView=true"
        }, {
            name: "Indicadores de Marketing",
            icon: "fa-pie-chart",
            link: "https://demo-presalesbrazil.us1.sapbusinessobjects.cloud/sap/fpa/ui/tenants/presalesbrazil/app.html#;view_id=story;storyId=8A17E3585EBE2E44E10000000A6C988B;forceOpenView=true"
        }
            /*, {
             name: "Minhas Tarefas",
             icon: "fa-list-alt",
             link: "https://my330686.crm.ondemand.com/sap/public/ap/ui/repository/SAP_UI/HTML5/newclient.html?app.component=/SAP_UI_CT/Main/root.uiccwoc&rootWindow=X&redirectUrl=/sap/public/byd/runtime&sap-ui-language=pt#Nav/1/eyJiSXNTaG93bkFzV29jVmlldyI6dHJ1ZSwidGFyZ2V0IjoiL0JZRF9DT0QvU2FsZXNPbkRlbWFuZC9BY3Rpdml0aWVzL1Rhc2svVUkvQ09EX1Rhc2suV0NWSUVXLnVpd29jdmlldyIsIndpbklkIjoiMWJiYjE2NTA0N2E3Mzk4NjI0OTJhNjkyZjc2NGQ3NzcifQ==",
             }, {
             name: "Minhas Visitas Pendentes",
             icon: "fa-pencil-square-o",
             link: "https://my330686.crm.ondemand.com/sap/public/ap/ui/repository/SAP_UI/HTML5/newclient.html?app.component=/SAP_UI_CT/Main/root.uiccwoc&rootWindow=X&redirectUrl=/sap/public/byd/runtime&sap-ui-language=pt#Nav/1/eyJiSXNTaG93bkFzV29jVmlldyI6dHJ1ZSwidGFyZ2V0IjoiL0JZRF9DT0QvU2FsZXNPbkRlbWFuZC9WaXNpdC9WaXNpdEV4ZWN1dGlvbi9DT0RfVmlzaXRfV0NWSUVXLldDVklFVy51aXdvY3ZpZXciLCJ3aW5JZCI6IjczMWRiZjljMjQwMWM3ZGE5M2E1N2E1MDJjZmU4OGFkIn0=",
             }*/

        ];
        $rootScope.activeMenu = $rootScope.menu;

        $rootScope.openSub = function (sub) {
            // $rootScope.activeMenu = sub;

            var res = sub.link.match(/http/g);
            if (res && res.length > 0) {
                $window.open(sub.link);
            } else {
                $location.path(sub.link);
            }

        }


    })
    .controller("PlanoController", function ($scope, $rootScope, $uibModal, $window) {
        $rootScope.clear();
        $scope.open('md', '', 'view/modal/cliente-plano.html', '');
        $rootScope.plano = {};
        $rootScope.selectedHistoricPlan = null;
        $rootScope.selectedAcao = null;
        $rootScope.novaAcao = {};

        $rootScope.closeHistoricPlan = function () {
            $rootScope.selectedHistoricPlan = null;
        }

        $rootScope.selecionaAcao = function (acao) {
            $rootScope.selectedAcao = acao;
            $scope.open('md', '', 'view/modal/nova-acao.html', '');
        }

        $rootScope.adicionarNovaAcao = function (item) {
            $rootScope.itensAcoes.push(item);
            $rootScope.clear();
        }

        $rootScope.selecionaProdutoAcao = function (produto) {
            $rootScope.selectedProductAcao = produto;
            $rootScope.showProdutos = false;
        }

        $rootScope.adicionarMixPlan = function () {

            angular.forEach($rootScope.listMixPlan, function (value, key) {
                $rootScope.adicionarNovaAcao(value);
            });

            $rootScope.listMixPlan = [];

            $rootScope.clear();

        }

        $rootScope.concluirPlano = function () {
            $scope.open('md', '', 'view/modal/plano-concluido.html', '');
            //$rootScope.selectedClient = null;
            //$rootScope.clear();


            $rootScope.selectedClientPlan.historicPlan.push({

                codigo: Math.round(Math.random() * 9999999),
                tipo: "Cliente",
                objetivo: $rootScope.plano.objetivo,
                nome: $rootScope.plano.nome,
                inicio: $rootScope.plano.dataInicio,
                fim: $rootScope.plano.dataFim,
                valor: "120.000,00",
                items: $rootScope.itensAcoes

            });


            $rootScope.itensAcoes = [];

        }

        $rootScope.selectHistoricPlan = function (historic) {
            $rootScope.selectedHistoricPlan = historic;
        }

        $rootScope.abrirHistoricoPlan = function () {
            $scope.open('lg', '', 'view/modal/historico-plano.html', '');
        }

    })
    .controller("PedidosController", function ($scope, $rootScope, $uibModal, $window) {



        $rootScope.planoNegocio = {};





        $rootScope.itemsPlanoNegocio = $rootScope.itemsPlano9;



        

        $scope.checkTruck = function (){
            console.log("checkTruck()");

            $scope.open('md', '', 'view/modal/truck.html', '');
        }




        $scope.onChangePlano = function (){
            console.log("onChangePlano()");
        }




        $scope.open('md', '', 'view/modal/cliente.html', '');

        $rootScope.itemPedido = {};
        $rootScope.selectedHistoric = null;
        $rootScope.selectedClient = null;
        $rootScope.totalItems = 0;
        $rootScope.valorTotal = 0;

        $rootScope.openClienteLink = function () {
            console.log();

            if ($rootScope.selectedClient.code == 2017011) {
                $window.open('https://my330686.crm.ondemand.com/sap/public/ap/ui/repository/SAP_UI/HTML5/newclient.html?app.component=/SAP_UI_CT/Main/root.uiccwoc&rootWindow=X&redirectUrl=/sap/public/byd/runtime&sap-ui-language=pt#Nav/1/eyJ0aGluZ3BhcmFtcyI6eyJLZXkiOiJPYm5LZXkkPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwidXRmLTE2XCI/PjxPYm5LZXk+PFNvdXJjZT48U291cmNlUGF0aD4vQllEX0NPRC9TYWxlc09uRGVtYW5kL0FjY291bnQvVUkvQ09EX0FjY291bnRfU09XTC5PV0wudWljb21wb25lbnQ8L1NvdXJjZVBhdGg+PC9Tb3VyY2U+PFBhdGg+L1Jvb3QvRGF0YUxpc3RbMDAxNjNFMDNBMDcwMUVEMjhCOURBRkVBMUQyNkIwMURdL1VVSUQ8L1BhdGg+PERhdGE+PFVVSUQ+MDAxNjNFMDNBMDcwMUVEMjhCOURBRkVBMUQyNkIwMUQ8L1VVSUQ+PC9EYXRhPjwvT2JuS2V5PiJ9LCJpblBvcnQiOiJJbnNwZWN0IiwidGFyZ2V0IjoiL0JZRF9DT0QvU2FsZXNPbkRlbWFuZC9BY2NvdW50L1VJL0NPRF9BY2NvdW50X1RJLlRJLnVpY29tcG9uZW50Iiwid2luSWQiOiI1YmU5Y2M5N2IxZmQ4NzJhOGE5MzU4ODRlY2RkNmEzYiJ9');
            } else if ($rootScope.selectedClient.code == 2017015) {
                $window.open('https://my330686.crm.ondemand.com/sap/public/ap/ui/repository/SAP_UI/HTML5/newclient.html?app.component=/SAP_UI_CT/Main/root.uiccwoc&rootWindow=X&redirectUrl=/sap/public/byd/runtime&sap-ui-language=pt#Nav/1/eyJ0aGluZ3BhcmFtcyI6eyJLZXkiOiJPYm5LZXkkPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwidXRmLTE2XCI/PjxPYm5LZXk+PFNvdXJjZT48U291cmNlUGF0aD4vQllEX0NPRC9TYWxlc09uRGVtYW5kL0FjY291bnQvVUkvQ09EX0FjY291bnRfU09XTC5PV0wudWljb21wb25lbnQ8L1NvdXJjZVBhdGg+PC9Tb3VyY2U+PFBhdGg+L1Jvb3QvRGF0YUxpc3RbMDAxNjNFMDNBMDcwMUVEMjhCOURCMDA0RUFBRTMwMURdL1VVSUQ8L1BhdGg+PERhdGE+PFVVSUQ+MDAxNjNFMDNBMDcwMUVEMjhCOURCMDA0RUFBRTMwMUQ8L1VVSUQ+PC9EYXRhPjwvT2JuS2V5PiJ9LCJpblBvcnQiOiJJbnNwZWN0IiwidGFyZ2V0IjoiL0JZRF9DT0QvU2FsZXNPbkRlbWFuZC9BY2NvdW50L1VJL0NPRF9BY2NvdW50X1RJLlRJLnVpY29tcG9uZW50Iiwid2luSWQiOiJjYmQ0MWFiOTc4ZDA4ODAyZGFhYjFhNmM3NzFmYmVhNCJ9');
            } else {
                console.log("Sem link");
            }
        }

        $rootScope.clear();

        $rootScope.closeHistoric = function () {
            $rootScope.selectedHistoric = null;
        }

        $rootScope.abrirHistorico = function () {
            $scope.open('lg', '', 'view/modal/historico.html', '');
        }

        $rootScope.selectHistoric = function (historic) {
            $rootScope.selectedHistoric = historic;
        }

        $rootScope.novoItemPedido = function () {
            console.log("novoItemPedido()");

            $scope.open('md', '', 'view/modal/novo-item.html', '');

            //$rootScope.buttonAdd = false;
            //$rootScope.showMarcas = true;
        }

        $rootScope.removerItem = function (itemPedido) {
            var index = $rootScope.itensPedido.indexOf(itemPedido);
            $rootScope.itensPedido.splice(index, 1);

            $rootScope.updateCartValues();
        }

        $rootScope.concluirPedido = function () {

            console.log(">>> $rootScope.concluirPedido()");

            //$rootScope.selectedClient = null;
            //$rootScope.clear();

            var descontoTotal = 0;

            angular.forEach($rootScope.itensPedido, function (item, key) {
                descontoTotal += item.desconto;
            });

            if (descontoTotal * 100 > 5) {
                $scope.open('md', '', 'view/modal/pedido-bloqueado.html', '');
            } else {
                $scope.open('md', '', 'view/modal/pedido-concluido.html', '');
                $rootScope.selectedClient.historic.push({

                    number: Math.round(Math.random() * 9999999),
                    date: "07/04/2017",
                    quantidade: "54",
                    desconto: "12%",
                    valor: "20.544,00",
                    items: $rootScope.itensPedido

                });
            }


            $rootScope.itensPedido = [];

        }
        $rootScope.adicionarSabaoYpe = function () {
            $rootScope.clear();
            $rootScope.selectedProduct = $rootScope.maisVendidos[1];
            $rootScope.showProdutos = false;
            $rootScope.showMarcas = false;
            $rootScope.showFamilias = false;
            $scope.open('md', '', 'view/modal/novo-item.html', '');
        }

        $rootScope.selecionaMaisVendido = function (produto) {
            $rootScope.clear();

            $rootScope.selectedProduct = produto;
            $rootScope.showProdutos = false;
            $rootScope.showMarcas = false;
            $rootScope.showFamilias = false;
            $scope.open('md', '', 'view/modal/novo-item.html', '');

        }

        $rootScope.selecionaProduto = function (produto) {
            $rootScope.selectedProduct = produto;
            $rootScope.showProdutos = false;
            console.log("selecionaProduto()" + produto.name);
        }

        $rootScope.adicionarMix = function () {

            angular.forEach($rootScope.listMix.items, function (value, key) {
                $rootScope.adicionarNoPedidoMix(value);
            });

            $rootScope.listMix.items = [];

            $rootScope.clear();

            $rootScope.updateCartValues();
            $rootScope.calculoPaletePerfeito();
        }

        $rootScope.adicionarNoPedidoMix = function (item) {
            $rootScope.itensPedido.push(item);

            $rootScope.updateCartValues();

            $rootScope.clear();
        }

        $rootScope.calculoPaletePerfeito = function () {

           // if (!$rootScope.isPaletePerfeito){
                if ($rootScope.totalItems > 0){
                    angular.forEach($rootScope.itensPedido, function (item, key) {
                        console.log("item: " + item.name );
                    });
                }
           // }

           // console.log("calculoPaletePerfeito()");

/*
            var paletePerfeito = $rootScope.totalItems / $rootScope.paletePerfeitoNumber;
            if (paletePerfeito % 1 == 0) {
                $rootScope.isPaletePerfeito = true;
            } else {
                $rootScope.isPaletePerfeito = false;
            }

            if (!$rootScope.isPaletePerfeito) {
                var divisor = ($rootScope.totalItems / $rootScope.paletePerfeitoNumber) % 1;
                $rootScope.quantidadeDeProdutosParaOPaletePerfeito = Math.floor($rootScope.paletePerfeitoNumber - ($rootScope.paletePerfeitoNumber * divisor));
                $rootScope.clear();

            }
            */


            //$rootScope.totalItems
        }

        $rootScope.adicionarNoPedido = function (item) {
            $rootScope.itensPedido.push(item);

            $rootScope.updateCartValues();

            $rootScope.calculoPaletePerfeito();

            $rootScope.verificaDesconto(item);

            $rootScope.clear();
        }

        $rootScope.verificaDesconto = function (item) {
            if(item.desconto > 0) {
                if (item.desconto > 0.05) {
                    $scope.open('md', '', 'view/modal/ordem-bloqueada.html', '');
                } else {
                    $scope.open('md', '', 'view/modal/desconto-inserido.html', '');
                }
            }
        }

        $rootScope.updateCartValues = function () {
            $rootScope.totalItems = 0;
            $rootScope.valorTotal = 0;
            angular.forEach($rootScope.itensPedido, function (value, key) {

                $rootScope.totalItems += Number(value.quantidade);
                $rootScope.valorTotal += Number(value.quantidade * value.price);
            });
        }




    })
    .controller("ModalInstanceCtrl", function ($scope, $rootScope, $uibModalInstance, $location) {
        var r = Math.random();

        if ($rootScope.planoNegocio && $rootScope.planoNegocio.selectedPlanoNegocio){
            if ($rootScope.planoNegocio.selectedPlanoNegocio.value == "plano3"){
                $rootScope.planoNegocio.desconto = 3;
            } else if ($rootScope.planoNegocio.selectedPlanoNegocio.value == "plano5"){
                $rootScope.planoNegocio.desconto = 5;
             } else if ($rootScope.planoNegocio.selectedPlanoNegocio.value == "plano9"){
                $rootScope.planoNegocio.desconto = 9;
            }
        }

        $scope.clientType = false;
        $scope.numeroPedido = Math.round(r * 9999999);

        $rootScope.novoPlano = function () {
            $uibModalInstance.dismiss('cancel');
            $rootScope.clear();
            $scope.open('md', '', 'view/modal/cliente-plano.html', '');
            //$rootScope.open('md', '', 'view/modal/cliente.html', '');
        }

        $rootScope.novoPedido = function () {
            $uibModalInstance.dismiss('cancel');
            $rootScope.clear();
            $scope.open('md', '', 'view/modal/cliente.html', '');

            //$rootScope.open('md', '', 'view/modal/cliente.html', '');
        }

        $rootScope.selecionaMarca = function (marca) {
            console.log("selecionaMarca()" + marca.name);
            if (marca.familia) {
                $rootScope.marca = marca;
                $rootScope.showMarcas = false;
                $rootScope.showFamilias = true;
            }
        }

        $rootScope.selecionaFamilia = function (familia) {
            console.log("selecionaFamilia()" + familia.name);
            if (familia.produtos) {
                $rootScope.showFamilias = false;
                $rootScope.showProdutos = true;
                $rootScope.familia = familia;
            }
        }

        $scope.reloadPedido = function () {

            angular.forEach($rootScope.selectedHistoric.items, function (value, key) {
                $rootScope.adicionarNoPedido(value);
            });


            $uibModalInstance.dismiss('cancel');
        }

        $scope.adicionarAcao = function () {


            var item = {
                sku: $rootScope.selectedProductAcao.sku,
                tipo: $rootScope.selectedAcao.name,
                verba: $rootScope.novaAcao.verba,
                volume: $rootScope.novaAcao.volume,
                desconto: $rootScope.novaAcao.desconto,
                tipoPagamento: $rootScope.novaAcao.tipoPagamento.name,
                precoUnitario: $rootScope.selectedProductAcao.price,
                crossIn: $rootScope.novaAcao.crossIn,
                crossOut: $rootScope.novaAcao.crossOut,
                mecanica: $rootScope.novaAcao.mecanica



            }

            $rootScope.adicionarNovaAcao(item);
            $uibModalInstance.dismiss('cancel');
        }

        $scope.adicionar = function () {

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

        $scope.ok = function () {
            console.log("ok()");
            $rootScope.clear();
            $uibModalInstance.close();
        };

        $scope.gotoHome = function () {
            $location.path("/home");
            $uibModalInstance.dismiss('cancel');
        };

        $scope.cancel = function () {
            console.log("cancel()");
            $rootScope.clear();
            $uibModalInstance.dismiss('cancel');
        };

        $scope.selectClient = function (client) {
            console.log("selectClient() " + client.listaMix.items);
            $uibModalInstance.dismiss('cancel');

            $rootScope.listMix = {};
            $rootScope.listMix.items = client.listaMix.items;
            $rootScope.listMixPlan = client.listaMixPlan;

            $rootScope.selectedClient = client;
            $rootScope.selectedClientPlan = client;
        }
    })
    .controller("ModalInstancePaletePerfeitoCtrl", function ($scope, $rootScope, $uibModalInstance) {

        $scope.adicionar = function () {
            $uibModalInstance.dismiss('cancel');
            $rootScope.adicionarSabaoYpe();
        }

        $scope.cancel = function () {
            console.log("cancel()");
            $rootScope.clear();
            $uibModalInstance.dismiss('cancel');
        };

    })
    .controller("MainController", function ($scope, $rootScope, $filter, $uibModal, $document, $location) {

        $rootScope.clear = function () {
            //console.log("XXX clear()");

            $rootScope.showMarcas = true;
            $rootScope.showFamilias = false;
            $rootScope.buttonAdd = true;
            $rootScope.selectedProduct = '';
            $rootScope.marca = '';
            $rootScope.familia = '';

            $rootScope.itemPedido = {};

            $rootScope.selectedAcao = {};
            $rootScope.selectedProductAcao = null;
            $rootScope.novaAcao = {};
            $rootScope.plano = {};

        }

        $rootScope.openPaletePerfeito = function (size, parentSelector, page, tipo) {

            var r = '?n=' + Math.random();

            var parentElem = parentSelector ?
                angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: page + r,
                controller: 'ModalInstancePaletePerfeitoCtrl',
                controllerAs: '$ctrl',
                size: size,
                appendTo: parentElem,
                resolve: {
                    items: function () {
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

        $rootScope.open = function (size, parentSelector, page, tipo) {

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
                    items: function () {
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

        $rootScope.dataValidade = function (date) {
            if (date) {
                var newDate = new Date(new Date(date).setMonth(date.getMonth() + 6));
                return $filter('date')(newDate, "dd/MM/yyyy");
                ;
            }
        }

        //Objetos Mock


        var historic = [{
            number: "20171112",
            date: "01/01/2017",
            quantidade: "54",
            desconto: "12%",
            valor: "1.544,00",
            items: [
                {
                    "id": "2007000",
                    "name": "Pano Multiuso Perfex",
                    "sku": "SKU20170142",
                    "quantidade": "10",
                    "price": 6.55,
                    "impostos": 1.22,
                    "desconto": 0
                },
                {
                    "id": "2007001",
                    "name": "Ype sabão em pó 500g",
                    "sku": "SKU20170142",
                    "quantidade": "10",
                    "price": 1.55,
                    "impostos": 1.22,
                    "desconto": 0
                },
                {
                    "id": "2007002",
                    "name": "Ype Lava Roupas",
                    "sku": "SKU20170142",
                    "quantidade": "10",
                    "price": 2.55,
                    "impostos": 1.22,
                    "desconto": 0
                },
                {
                    "id": "2007003",
                    "name": "Ype barra 200g",
                    "sku": "SKU20170142",
                    "quantidade": "10",
                    "price": 4.55,
                    "impostos": 1.22,
                    "desconto": 0
                },
                {
                    "id": "2007004",
                    "name": "Agua Sanitaria 5l",
                    "sku": "SKU20170142",
                    "quantidade": "50",
                    "price": 3.55,
                    "impostos": 1.22,
                    "desconto": 0
                }
            ]
        }, {
            number: "20171189",
            date: "15/01/2017",
            quantidade: "97",
            desconto: "15%",
            valor: "3.822,00",
            items: [
                {
                    "id": "2007000",
                    "name": "Agua Sanitaria 5l",
                    "sku": "SKU20170142",
                    "quantidade": "15",
                    "price": 3.55,
                    "impostos": 1.22,
                    "desconto": 0.005
                },
                {
                    "id": "2007001",
                    "name": "Ype Lava Roupas",
                    "sku": "SKU20170142",
                    "quantidade": "50",
                    "price": 2.55,
                    "impostos": 1.22,
                    "desconto": 0.045
                }
            ]
        }, {
            number: "20171199",
            date: "30/01/2017",
            quantidade: "200",
            desconto: "5%",
            valor: "2.822,00",
            items: [
                {
                    "id": "2007000",
                    "name": "Lava Louça Ype 5l neutro",
                    "sku": "SKU20170142",
                    "quantidade": 40,
                    "price": 13.55,
                    "impostos": 1.22,
                    "desconto": 0.04
                },
                {
                    "id": "2007001",
                    "name": "Lava Louça Ype 5l clear",
                    "sku": "SKU20170142",
                    "quantidade": "50",
                    "price": 12.55,
                    "impostos": 1.22,
                    "desconto": 0
                },
                {
                    "id": "2007002",
                    "name": "Ype sabão em pó 500g",
                    "sku": "SKU20170142",
                    "quantidade": 30,
                    "price": 1.55,
                    "impostos": 1.22,
                    "desconto": 0.085
                }
            ]
        }, {
            number: "20171222",
            date: "15/02/2017",
            quantidade: "12",
            desconto: "2%",
            valor: "450,00",
            items: [
                {
                    "id": "2007000",
                    "name": "Pano Multiuso Perfex",
                    "sku": "SKU20170142",
                    "quantidade": 20,
                    "price": 6.55,
                    "impostos": 1.22,
                    "desconto": 0.03
                },
                {
                    "id": "2007001",
                    "name": "Ype Clear",
                    "sku": "SKU20170002",
                    "quantidade": 40,
                    "price": 4.55,
                    "impostos": 1.22,
                    "desconto": 0
                }
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
        var historicPlan = [{
            codigo: "65456465",
            tipo: "Cliente",
            objetivo: "AUMENTAR RECEITA",
            nome: "PlanoMaio16",
            inicio: "02-04-2016",
            fim: "01-08-2016",
            valor: "140.000,00",
            items: [
                {
                    "sku": "SKU20170002",
                    "tipo": "AÇÃO M3",
                    "verba": "100000",
                    "volume": "200",
                    "desconto": "5",
                    "tipoPagamento": "DESCONTO PRÓXIMA COMPRA",
                    "precoUnitario": 4.55
                },
                {
                    "sku": "SKU20170006",
                    "tipo": "AÇÃO ESTOQUE 5",
                    "verba": "40000",
                    "volume": "40",
                    "desconto": "4",
                    "tipoPagamento": "PAGAMENTO EM DINHEIRO",
                    "precoUnitario": 2.55
                }
            ]
        }, {
            codigo: "46546554",
            tipo: "Cliente",
            objetivo: "DIMINUIÇÃO DE ESTOQUE",
            nome: "PlanoDesembro16",
            inicio: "02-11-2016",
            fim: "01-02-2017",
            valor: "50.000,00",
            items: [
                {
                    "sku": "SKU20170002",
                    "tipo": "AÇÃO NATAL",
                    "verba": "30000",
                    "volume": "200",
                    "desconto": "5",
                    "tipoPagamento": "DESCONTO PRÓXIMA COMPRA",
                    "precoUnitario": 4.55
                },
                {
                    "sku": "SKU20170006",
                    "tipo": "AÇÃO PONTA ESTOQUE",
                    "verba": "20000",
                    "volume": "40",
                    "desconto": "4",
                    "tipoPagamento": "PAGAMENTO EM DINHEIRO",
                    "precoUnitario": 2.55
                }
            ]
        }


        ];
        $rootScope.paletePerfeitoNumber = 40;
        $rootScope.isPaletePerfeito = true;


        $rootScope.plusPalete = 0;

        $rootScope.itemsPlano3 = [
            {
                id: "200700055",
                sku: 'SKU20170042',
                quantidade: 1,
                impostos: 1.22,
                price: 1.27,
                desconto: 3,
                descricao: "Barra Ypê",
                name: "Sabão"
            },
            {
                id: "200700051",
                sku: 'SKU20170984',
                quantidade: 5,
                impostos: 1.42,
                price: 2.99,
                desconto: 3,
                descricao: "1L",
                name: "Desinfetante"
            },
            {
                id: "200700089",
                sku: 'SKU20170499',
                quantidade: 8,
                impostos: 1.92,
                price: 4.90,
                desconto: 3,
                descricao: "Multiuso",
                name: "Ypê"
            }];

             $rootScope.itemsPlano5 = [
            {
                id: "200700055",
                sku: 'SKU20170042',
                quantidade: 1,
                impostos: 1.22,
                price: 1.27,
                desconto: 5,
                descricao: "Barra Ypê",
                name: "Sabão"
            },
            {
                id: "200700051",
                sku: 'SKU20170984',
                quantidade: 5,
                impostos: 1.42,
                price: 2.99,
                desconto: 5,
                descricao: "1L",
                name: "Desinfetante"
            },
            {
                id: "200700089",
                sku: 'SKU20170499',
                quantidade: 8,
                impostos: 1.92,
                price: 4.90,
                desconto: 5,
                descricao: "Multiuso",
                name: "Ypê"
            }];

              $rootScope.itemsPlano9 = [
            {
                id: "200700055",
                sku: 'SKU20170042',
                quantidade: 1,
                impostos: 1.22,
                price: 1.27,
                desconto: 9,
                descricao: "Barra Ypê",
                name: "Sabão"
            },
            {
                id: "200700051",
                sku: 'SKU20170984',
                quantidade: 5,
                impostos: 1.42,
                price: 2.99,
                desconto: 9,
                descricao: "1L",
                name: "Desinfetante"
            },
            {
                id: "200700089",
                sku: 'SKU20170499',
                quantidade: 8,
                impostos: 1.92,
                price: 4.90,
                desconto: 9,
                descricao: "Multiuso",
                name: "Ypê"
            }];

            


        $rootScope.itensPedidoBox = [
            {
                id: "200700055",
                sku: 'SKU20170042',
                quantidade: 1,
                impostos: 1.22,
                price: 1.27,
                desconto: .3,
                descricao: "Barra Ypê",
                name: "Sabão"
            },
            {
                id: "200700051",
                sku: 'SKU20170984',
                quantidade: 5,
                impostos: 1.42,
                price: 2.99,
                desconto: .3,
                descricao: "1L",
                name: "Desinfetante"
            },
            {
                id: "200700089",
                sku: 'SKU20170499',
                quantidade: 8,
                impostos: 1.92,
                price: 4.90,
                desconto: .3,
                descricao: "Multiuso",
                name: "Ypê"
            }];


        $rootScope.listaMix = {
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
        $rootScope.newDate = new Date();
        $rootScope.listaMixPlan = [{
            "sku": "SKU20170001",
            "tipo": "AÇÃO ANIVERSÁRIO",
            "verba": "10000",
            "volume": "50",
            "desconto": "1",
            "tipoPagamento": "CRÉDITO EM CONTA",
            "precoUnitario": 3.55
        },
            {
                "sku": "SKU20170002",
                "tipo": "AÇÃO NATAL",
                "verba": "100000",
                "volume": "200",
                "desconto": "5",
                "tipoPagamento": "DESCONTO PRÓXIMA COMPRA",
                "precoUnitario": 4.55
            },
            {
                "sku": "SKU20170006",
                "tipo": "AÇÃO PONTA ESTOQUE",
                "verba": "40000",
                "volume": "40",
                "desconto": "4",
                "tipoPagamento": "PAGAMENTO EM DINHEIRO",
                "precoUnitario": 2.55
            }
        ];
        $rootScope.listaClientes = [{
            code: '2017011',
            name: 'Grupo Pão de Açucar',
            address: "Av. Brigadeiro Luiz Antonio, 21 - Bela vista - São Paulo - SP",
            historic: historic,
            listaMix: $rootScope.listaMix,
            historicPlan: historicPlan,
            listaMixPlan: $rootScope.listaMixPlan,
            credito: credito
        }, {
            code: '2017012',
            name: 'Covabra Supermecados',
            address: "Rua Macuco, 200 - Moema - São Paulo - SP",
            historic: historic,
            listaMix: $rootScope.listaMix,
            historicPlan: historicPlan,
            listaMixPlan: $rootScope.listaMixPlan,
            credito: credito
        }, {
            code: '2017013',
            name: 'Sam`s Club',
            address: "Av Bandeirantes, km 20 - São Paulo - SP",
            historic: historic,
            listaMix: $rootScope.listaMix,
            historicPlan: historicPlan,
            listaMixPlan: $rootScope.listaMixPlan,
            credito: credito
        }, {
            code: '2017014',
            name: 'Walmart',
            address: "Radial Leste, 2000 - Tatuapé - São Paulo - SP",
            historic: historic,
            listaMix: $rootScope.listaMix,
            historicPlan: historicPlan,
            listaMixPlan: $rootScope.listaMixPlan,
            credito: credito
        }, {
            code: '2017015',
            name: 'Makro',
            address: "Rodovia Dutra km 40 - São Paulo - SP",
            historic: historic,
            listaMix: $rootScope.listaMix,
            historicPlan: historicPlan,
            listaMixPlan: $rootScope.listaMixPlan,
            credito: credito
        }, {
            code: '2017016',
            name: 'Delben Supermercados',
            address: "Av. Brigadeiro Luiz Antonio, 21 - Bela vista - São Paulo - SP",
            historic: historic,
            listaMix: $rootScope.listaMix,
            historicPlan: historicPlan,
            listaMixPlan: $rootScope.listaMixPlan,
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
        $rootScope.itensAcoes = [];




               $rootScope. listaMecanicas = [{
            name: "Bonificação",
            value: "bonificacao"
        },{
            name: "Rebate",
            value: "rebate"
        }];
        

        
        $rootScope.listaPlanoNegocio = [{
            name: "Plano 3",
            value: "plano3"
        },{
            name: "Plano 5",
            value: "plano5"
        },{
            name: "Plano 9",
            value: "plano9"
        }];


        $rootScope.listaTiposPagamentos = [{
            name: "CRÉDITO EM CONTA",
            value: "tipo1"
        }, {
            name: "DESCONTO PRÓXIMA COMPRA",
            value: "tipo2"
        }, {
            name: "PAGAMENTO EM DINHEIRO",
            value: "tipo3"
        }, {
            name: "COMPRA",
            value: "tipo4"
        }];
        $rootScope.listaObjetivos = [{
            name: "AUMENTAR VOLUME VENDAS",
            value: "obj1"
        }, {
            name: "AUMENTAR RECEITA",
            value: "obj2"
        }, {
            name: "DIMINUIÇÃO DE ESTOQUE",
            value: "obj3"
        }, {
            name: "ANIVERSÁRIO",
            value: "obj4"
        }

        ];
        $rootScope.listaAcoes = [{
            name: "AÇÃO ANIVERSÁRIO",
            value: "acao1"
        }, {
            name: "AÇÃO REBATE",
            value: "acao2"
        }, {
            name: "AÇÃO DESCONTO",
            value: "acao3"
        }, {
/*            name: "AÇÃO GONDOLA",
            value: "acao4"
        }, {*/
            name: "AÇÃO MATERIAL MERCHANT",
            value: "acao5"
        }, {
            name: "AÇÃO BONIFICAÇÃO",
            value: "acao6"
        }/*, {
            name: "AÇÃO NATAL",
            value: "acao7"
        }*/];
        $rootScope.produtos = [{
            name: 'assolan',
            image: 'images/marcas/marca_assolan.png',
        }, {
            name: 'atol',
            image: 'images/marcas/marca_atol.png',
        }, {
            name: 'perfex',
            image: 'images/marcas/marca_perfex.png',
        }, {
            name: 'tixan',
            image: 'images/marcas/marca_tixan.png',
        }, {
            name: 'ype',
            image: 'images/marcas/marca_ype.png',
            familia: [{
                name: 'cloro_gel',
                image: 'images/familia/cloro_gel_thumb.png'
            }, {
                name: 'cross',
                image: 'images/familia/cross_thumb.png'
            }, {
                name: 'aguasanitaria',
                image: 'images/familia/produto_aguasanitaria.png'
            }, {
                name: 'amaciantes',
                image: 'images/familia/produto_amaciantes.png'
            }, {
                name: 'amaciantes_concentrado',
                image: 'images/familia/produto_amaciantes_concentrado.png'
            }, {
                name: 'desinfetante',
                image: 'images/familia/produto_desinfetante.png'
            }, {
                name: 'lavalouca',
                image: 'images/familia/produto_lavalouca.png',
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
                image: 'images/familia/produto_lustramoveis.png'
            }, {
                name: 'multiuso',
                image: 'images/familia/produto_multiuso.png'
            }, {
                name: 'sabaoembarra',
                image: 'images/familia/produto_sabaoembarra.png'
            }, {
                name: 'saboneteaction',
                image: 'images/familia/produto_saboneteaction.png'
            }, {
                name: 'saboneteluxo',
                image: 'images/familia/produto_saboneteluxo.png'
            }, {
                name: 'sabonetesuave',
                image: 'images/familia/produto_sabonetesuave.png'
            }, {
                name: 'ypepremium',
                image: 'images/familia/produto_ypepremium.png'
            }

            ]
        }];
        $rootScope.linksHome = [{
            title: "Atividades",
            list: [{
                title: "Minhas Tarefas",
                icon: 'fa-calendar',
                link: "https://my330686.crm.ondemand.com/sap/public/ap/ui/repository/SAP_UI/HTML5/newclient.html?app.component=/SAP_UI_CT/Main/root.uiccwoc&rootWindow=X&redirectUrl=/sap/public/byd/runtime&sap-ui-language=pt#Nav/1/eyJiSXNTaG93bkFzV29jVmlldyI6dHJ1ZSwidGFyZ2V0IjoiL0JZRF9DT0QvU2FsZXNPbkRlbWFuZC9BY3Rpdml0aWVzL1Rhc2svVUkvQ09EX1Rhc2suV0NWSUVXLnVpd29jdmlldyIsIndpbklkIjoiMWJiYjE2NTA0N2E3Mzk4NjI0OTJhNjkyZjc2NGQ3NzcifQ==",
                image: "images/kpi1.png",
                target: '_blank'
            }, {
                title: "Próximas Visitas",
                icon: 'fa-pencil-square-o',
                link: "https://my330686.crm.ondemand.com/sap/public/ap/ui/repository/SAP_UI/HTML5/newclient.html?app.component=/SAP_UI_CT/Main/root.uiccwoc&rootWindow=X&redirectUrl=/sap/public/byd/runtime&sap-ui-language=pt#Nav/1/eyJiSXNTaG93bkFzV29jVmlldyI6dHJ1ZSwidGFyZ2V0IjoiL0JZRF9DT0QvU2FsZXNPbkRlbWFuZC9WaXNpdC9WaXNpdEV4ZWN1dGlvbi9DT0RfVmlzaXRfV0NWSUVXLldDVklFVy51aXdvY3ZpZXciLCJ3aW5JZCI6IjczMWRiZjljMjQwMWM3ZGE5M2E1N2E1MDJjZmU4OGFkIn0=",
                image: "images/kpi2.png",
                target: '_blank'
            }, {
                title: "Atividades em Aberto",
                icon: 'fa-pencil-square-o',
                link: "",
                image: "images/kpi3.png",
                target: '_self'
            }]

        }, {
            title: "Relatorios Pedidos",
            list: [{
                title: "Pedidos Faturado x Meta",
                icon: 'fa-calendar',
                link: "",
                image: "images/kpi4.png",
                target: '_blank'
            }, {
                title: "Valores em Aberto",
                icon: 'fa-pencil-square-o',
                link: "",
                image: "images/kpi5.png",
                target: '_blank'
            }, {
                title: "Previsão Faturado x Aberto",
                icon: 'fa-pencil-square-o',
                link: "",
                image: "images/kpi6.png",
                target: '_blank'
            }]
        }, {
            title: "Relatorios Vendas",
            list: [{
                title: "Venda por Familia de Produto",
                icon: 'fa-calendar',
                link: "",
                image: "images/kpi7.png",
                target: '_blank'
            }, {
                title: "Receita de Vendas por Cliente",
                icon: 'fa-pencil-square-o',
                link: "",
                image: "images/kpi1.png",
                target: '_blank'
            }, {
                title: "Cotas Promocionais por Cliente",
                icon: 'fa-pencil-square-o',
                link: "",
                image: "images/kpi2.png",
                target: '_blank'
            }]
        }]
    });
