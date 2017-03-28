angular.module("App.controllers", [])
    .controller("HomeController", function($scope, $rootScope) {
        $scope.links = [{
                title: "Eventos",
                icon: "fa-calendar",
                text: "Gerenciador de Eventos",
                link: "/cadastro_evento"
            }, {
                title: "Cadastros",
                icon: "fa-pencil-square-o",
                text: "Gerenciador de Cadastros",
                link: "/cadastros"
            }

        ];

        $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
        $scope.data = [300, 500, 100];

    })
    .controller("PedidosController", function($scope, $rootScope) {
        $rootScope.showMarcas = false; 
        $rootScope.showFamilias = false; 
        $rootScope.buttonAdd = true; 
        $rootScope.marca = '';        
        $rootScope.familia = '';   

        //$rootScope.produtos = [{
          
        $scope.novoItemPedido = function() {
            $rootScope.buttonAdd = false;
            $rootScope.showMarcas = true; 
        }
        $scope.selecionaMarca = function(marca) {
            $rootScope.marca = marca;
            $rootScope.showMarcas = false; 
            $rootScope.showFamilias = true; 
        }
        $scope.selecionaFamilia = function(familia) {
            $rootScope.showFamilias = false; 
            $rootScope.showProdutos = true; 
            $rootScope.familia = familia;
        }

    })
    .controller("CadastrosController", function($scope, $rootScope) {
        $scope.links = [{
                title: "Tipos Eventos",
                icon: "fa-pencil-square-o",
                text: "Cadastrar novo tipo de Eventos",
                // link: "/tipo_evento"

                link: "/cadastros"
            }, {
                title: "SubTipos Eventos",
                icon: "fa-pencil-square-o",
                text: "Cadastrar subtipo de Eventos",
                // link: "/tipo_evento"

                link: "/cadastros"
            }, {
                title: "Cotas",
                icon: "fa-pencil-square-o",
                text: "% Cotas por tipo de Evento",
                // link: "/cotas_evento"
                link: "/cadastros"
            }, {
                title: "Clientes",
                icon: "fa-pencil-square-o",
                text: "Cadastrar clientes internos",
                // link: "/cotas_evento"
                link: "/cadastros"
            }

        ];

    })
    .controller("EventosController", function($scope, $rootScope, $filter) {
        $rootScope.tabactive = 0;
        $rootScope.viewEvento = false;
        $scope.collapseFormEvento = true;

        function novo() {
            $scope.evento = $rootScope.modeloEvento;
            $scope.evento.id = $rootScope.listaEventos.length;
            $scope.evento.data_cadastro = new Date();
        }

        $scope.novoEvento = function() {
            $scope.collapseFormEvento = false;
            novo();

        }
        $scope.salvarEvento = function() {
            $rootScope.listaEventos[$scope.evento.id] = $scope.evento;
        }

        $scope.getPercCota = function(id) {
            if ($scope.evento) {
                return parseInt($scope.evento.tipoEvento.percs[id]);
            }
        }
        $scope.visualizarEvento = function(evento) {
            $scope.evento = evento;
            $rootScope.viewEvento = true;
            $scope.collapseFormEvento = false;
        }
        $scope.getCotas = function(id) {
            if ($scope.evento) {
                return parseInt(($scope.evento.cotas / 100) * $scope.getPercCota(id));
            }
        }
        $scope.addConvidadoGrupoAlvo = function() {
            $scope.evento.grupos.push({ grupo: $rootScope.convidadoGrupoAlvo.grupo, clienteInterno: $rootScope.convidadoGrupoAlvo.clienteInterno });
            $rootScope.convidadoGrupoAlvo = {};
        }

        $scope.addConvidadoAvulso = function() {
            $scope.evento.convidados.push({ name: $rootScope.convidadoAvulso.nome, email: $rootScope.convidadoAvulso.email, telefone: $rootScope.convidadoAvulso.telefone, clienteInterno: $rootScope.convidadoAvulso.clienteInterno });
            $rootScope.convidadoAvulso = {};
        }

        $scope.closeTabs = function() {
            $scope.evento = null;
            $rootScope.viewEvento = false;
            $scope.collapseFormEvento = true;
        }

        $rootScope.totalQ = 0;
        $rootScope.totalP = 0;

        $scope.tipoCota = "s";

        $scope.selectCota = function(tipo) {
            /*$scope.tipoCota = tipo;


            this.calcCotas();


            if (tipo == "s") {

            } else if (tipo == "q") {} else if (tipo == "p") {

            }*/
        }

        $scope.teste1 = function() {
            console.log('teste(0) ');
            this.calcCotas();
        }
        $scope.calcCotas = function() {

            var list = $rootScope.listaCalcTipos;


            //$rootScope.totalQ = 0;
            //$rootScope.totalP = 0;

            for (var i = 0; i < list.length; i++) {
                list[i].values[0] = this.getCotas(i);
                $rootScope.totalQ += list[i].values[0];


                list[i].values[1] = this.getPercCota(i);
                $rootScope.totalP += list[i].values[1];
            }
        }




    })
    .controller("MainController", function($scope, $rootScope, $filter, $uibModal, $document, $location) {


        $rootScope.dataValidade = function(date) {
            if (date) {
                var newDate = new Date(new Date(date).setMonth(date.getMonth() + 6));
                return $filter('date')(newDate, "dd/MM/yyyy");;
            }
        }

        $rootScope.newDate = new Date();

        $rootScope.listaTemplateYMkt = [
            { name: 'Convite Show' },
            { name: 'Convite Jogo' }
        ];

        $rootScope.listaTemplateConvite = [
            { name: 'Convite1' },
            { name: 'Convite2' },
            { name: 'Convite3' }
        ];

        $rootScope.listaTemplateTeaser = [
            { name: 'Teaser1' },
            { name: 'Teaser2' },
            { name: 'Teaser3' }
        ];

        $rootScope.listaTemplateRodape = [
            { name: 'Rodapé1' },
            { name: 'Rodapé2' },
            { name: 'Rodapé3' }
        ];


        $rootScope.listaCanaisEnvio = [
            { name: 'Email' },
            { name: 'SMS' },
            { name: 'Mais Efetivo por Cliente e no Melhor Horário' }
        ];
        $rootScope.listaCanaisRSVP = [
            { name: 'Call List' },
            { name: 'Email' },
            { name: 'SMS' }
        ];

        $rootScope.listaClientesInternos = [
            { name: 'Mapfre' },
            { name: 'Presidencia SH1' },
            { name: 'Presidencia SH2' },
            { name: 'BB Seguridade' }
            // { name: 'Victor Serra', email:'victor.serra@partners.srv.br', telefone: '11 98901 9919', clienteInterno:  },
        ];

        $rootScope.listaCalcTipos = [
            { name: 'Rede Mapfre', values: [] },
            { name: 'Rede BB', values: [] },
            { name: 'Presidencia SH1', values: [] },
            { name: 'Presidencia SH2', values: [] },
            { name: 'MSF', values: [] },
            { name: 'BB Seguridade', values: [] },
            { name: 'Agência', values: [] },
            { name: 'Reserva Técnica', values: [] },
            { name: 'Grupo(RH)', values: [] }
        ];

        $rootScope.listaTipos = [{
                name: 'CINEMA',
                percs: [30, 30, 5, 5, 10, 10, 2, 2, 6],
                subs: [
                    { name: 'ESTRÉIAS' },
                    { name: 'INGRESSOS' }
                ]
            }, {
                name: 'TEATRO',
                percs: [40, 20, 10, 11, 5, 5, 5, 2, 2],
                subs: [

                    { name: 'PEÇAS' },
                    { name: 'STAND UP' },
                    { name: 'MÁGICA' },
                    { name: 'MUSICAL' }
                ]
            }, {
                name: 'DANÇA',
                percs: [15, 15, 15, 15, 15, 15, 5, 3, 2],
                subs: [
                    { name: 'BALLET' },
                    { name: 'CONTEMPORÂNEA' }

                ]
            }, {
                name: 'MUSICA',
                percs: [10, 10, 10, 30, 10, 10, 5, 5, 10],
                subs: [
                    { name: 'SHOWS' },
                    { name: 'CONCERTOS' },
                    { name: 'ÓPERAS' },
                    { name: 'FESTIVAIS' }

                ]
            }, {
                name: 'EXPOSIÇÕES',
                percs: [30, 30, 5, 5, 10, 10, 2, 2, 6],
                subs: [
                    { name: 'ARTES VISUAIS' },
                    { name: 'LITERATURA' }

                ]
            }, {
                name: 'ESPECIAIS',
                percs: [30, 30, 5, 5, 10, 10, 2, 2, 6],
                subs: [
                    { name: 'CARNAVAL' },
                    { name: 'CIRCO' },
                    { name: 'PALESTRAS' }

                ]
            }, {
                name: 'GASTRONOMIA',
                percs: [30, 30, 5, 5, 10, 10, 2, 2, 6],
                subs: [
                    { name: 'RESTAURANTE' },
                    { name: 'FESTIVAIS' }

                ]
            }, {
                name: 'EDUCATIVOS',
                percs: [30, 30, 5, 5, 10, 10, 2, 2, 6],
                subs: [
                    { name: 'PROGRAMAS' }

                ]
            }, {
                name: 'MODA',
                percs: [30, 30, 5, 5, 10, 10, 2, 2, 6],
                subs: [
                    { name: 'FASHION WEEK' }

                ]
            }, {
                name: 'ESPORTE',
                percs: [30, 30, 5, 5, 10, 10, 2, 2, 6],
                subs: [
                    { name: 'FUTEBOL' },
                    { name: 'TENIS' },
                    { name: 'BASQUETE' },
                    { name: 'OLIMPIADAS' }

                ]
            }

        ];
        $rootScope.listaProgramas = [
            { name: 'Budget Q1 - Shows' },
            { name: 'Budget Q2 - Cliente Silver' },
            { name: 'Budget Q2 - Cliente Gold' },
            { name: 'Budget Q3' }

        ];



        $rootScope.listaGrupos = [
            { name: 'GA-SP Gold', desc: "Grupo Alvo São Paulo Gold" },
            { name: 'GA-SP Silver', desc: "Grupo Alvo São Paulo Silver" },
            { name: 'GA-SP Bronze', desc: "Grupo Alvo São Paulo Bronze" }

        ];

          

        $rootScope.produtos = [{
            name: 'assolan',
            image: '/images/marcas/marca_assolan.webp',
        }, {
            name: 'atol',
            image: '/images/marcas/marca_atol.webp',
        }, {
            name: 'perfex',
            image: '/images/marcas/marca_perfex.webp',
        }, {
            name: 'tixan',
            image: '/images/marcas/marca_tixan.webp',
        }, {
            name: 'ype',
            image: '/images/marcas/marca_ype.webp',
            familia: [{
                    name: 'cloro_gel',
                    image: '/images/familia/cloro_gel_thumb.webp'
                }, {
                    name: 'cross',
                    image: '/images/familia/cross_thumb.webp'
                }, {
                    name: 'aguasanitaria',
                    image: '/images/familia/produto_aguasanitaria.webp'
                }, {
                    name: 'amaciantes',
                    image: '/images/familia/produto_amaciantes.webp'
                }, {
                    name: 'amaciantes_concentrado',
                    image: '/images/familia/produto_amaciantes_concentrado.webp'
                }, {
                    name: 'desinfetante',
                    image: '/images/familia/produto_desinfetante.webp'
                }, {
                    name: 'lavalouca',
                    image: '/images/familia/produto_lavalouca.webp',
                    produtos: [{
                            name: 'Ype Clear Care',
                            image: '/images/produto/LL Ype Clear Care_novo.png'
                        }, {
                            name: 'Ype Clear',
                            image: '/images/produto/LL Ype Clear_novo.png'
                        }, {
                            name: 'Ype Coco',
                            image: '/images/produto/LL Ype Coco_novo.png'
                        }, {
                            name: 'Ype Limao',
                            image: '/images/produto/LL Ype Limao_novo.png'
                        }, {
                            name: 'Ype Maca PET',
                            image: '/images/produto/LL Ype Maca PET novo.png'
                        }, {
                            name: 'Ype Neutro',
                            image: '/images/produto/LL Ype Neutro_novo.png'
                        }

                    ]
                }, {
                    name: 'lustramoveis',
                    image: '/images/familia/produto_lustramoveis.webp'
                }, {
                    name: 'multiuso',
                    image: '/images/familia/produto_multiuso.webp'
                }, {
                    name: 'sabaoembarra',
                    image: '/images/familia/produto_sabaoembarra.webp'
                }, {
                    name: 'saboneteaction',
                    image: '/images/familia/produto_saboneteaction.webp'
                }, {
                    name: 'saboneteluxo',
                    image: '/images/familia/produto_saboneteluxo.webp'
                }, {
                    name: 'sabonetesuave',
                    image: '/images/familia/produto_sabonetesuave.webp'
                }, {
                    name: 'ypepremium',
                    image: '/images/familia/produto_ypepremium.webp'
                }

            ]
        }];

        $rootScope.listaClientes = [
            { name: 'Cliente1', desc: "desc1" },
            { name: 'Cliente2', desc: "desc2" },
            { name: 'Cliente3', desc: "desc3" }

        ];

        $rootScope.convidadoGrupoAlvo = {

        }

        $rootScope.convidadoAvulso = {

        }

        $rootScope.modeloEvento = {
            nome: '',
            tipoEvento: $rootScope.listaTipos[0],
            programa: $rootScope.listaProgramas[0],
            local: '',
            dataInicio: new Date('02/20/2017'),
            horaInicio: '08:00',
            dataFim: new Date('02/20/2017'),
            horaFim: '22:00',
            descricao: '',
            templateYMkt: 0,
            cotas: 200,
            arquivoBanner: '',
            arquivoPagina: '',
            arquivoTeaser: '',
            arquivoLogomarca: '',
            arquivoRodape: '',
            arquivoClassificacao: '',
            canalEnvio: 0,
            canalRSVP: 0,
            passWallet: 0,

            grupos: [],

            convidados: []
        }


        $rootScope.listaEventos = [
            { "nome": "ESTUDO PARA MISSA CLARICE", "tipoEvento": { "name": "TEATRO", "percs": [40, 20, 10, 11, 5, 5, 5, 2, 2], "subs": [{ "name": "PEÇAS" }, { "name": "STAND UP" }, { "name": "MÁGICA" }, { "name": "MUSICAL" }] }, "programa": { "name": "Budget Q1 - Shows" }, "local": "CCBB", "dataInicio": "2017-01-04T02:00:00.000Z", "horaInicio": "08:00", "dataFim": "2017-02-01T02:00:00.000Z", "horaFim": "22:00", "descricao": "", "templateYMkt": 0, "cotas": 200, "arquivoBanner": "", "arquivoPagina": "", "arquivoTeaser": "", "arquivoLogomarca": "", "arquivoRodape": "", "arquivoClassificacao": "", "canalEnvio": 0, "canalRSVP": 0, "passWallet": 0, "grupos": [{ "grupo": { "name": "GA-SP Gold", "desc": "Grupo Alvo São Paulo Gold" }, "clienteInterno": { "name": "Mapfre" } }], "convidados": [], "id": 0, "data_cadastro": "2017-01-25T23:55:06.456Z", "subTipoEvento": { "name": "PEÇAS" } }, { "nome": "PRÊMIO MUSICA BRASILEIRA", "tipoEvento": { "name": "MUSICA", "percs": [10, 10, 10, 30, 10, 10, 5, 5, 10], "subs": [{ "name": "SHOWS" }, { "name": "CONCERTOS" }, { "name": "ÓPERAS" }, { "name": "FESTIVAIS" }] }, "programa": { "name": "Budget Q1 - Shows" }, "local": "CCBB", "dataInicio": "2016-08-27T03:00:00.000Z", "horaInicio": "08:00", "dataFim": "2016-08-27T03:00:00.000Z", "horaFim": "22:00", "descricao": "", "templateYMkt": 0, "cotas": "500", "arquivoBanner": "", "arquivoPagina": "", "arquivoTeaser": "", "arquivoLogomarca": "", "arquivoRodape": "", "arquivoClassificacao": "", "canalEnvio": 0, "canalRSVP": 0, "passWallet": 0, "grupos": [{ "grupo": { "name": "GA-SP Bronze", "desc": "Grupo Alvo São Paulo Bronze" }, "clienteInterno": { "name": "Mapfre" } }, { "grupo": { "name": "GA-SP Silver", "desc": "Grupo Alvo São Paulo Silver" } }, { "grupo": { "name": "GA-SP Bronze", "desc": "Grupo Alvo São Paulo Bronze" } }, { "grupo": { "name": "GA-SP Gold", "desc": "Grupo Alvo São Paulo Gold" } }], "convidados": [], "id": 1, "data_cadastro": "2017-01-25T23:56:05.948Z", "subTipoEvento": { "name": "CONCERTOS" } }, { "nome": "TRIUNFO DA COR", "tipoEvento": { "name": "EXPOSIÇÕES", "percs": [30, 30, 5, 5, 10, 10, 2, 2, 6], "subs": [{ "name": "ARTES VISUAIS" }, { "name": "LITERATURA" }] }, "programa": { "name": "Budget Q1 - Shows" }, "local": "CCBB", "dataInicio": "2016-07-20T03:00:00.000Z", "horaInicio": "08:00", "dataFim": "2016-10-17T02:00:00.000Z", "horaFim": "22:00", "descricao": "", "templateYMkt": 0, "cotas": "1000", "arquivoBanner": "", "arquivoPagina": "", "arquivoTeaser": "", "arquivoLogomarca": "", "arquivoRodape": "", "arquivoClassificacao": "", "canalEnvio": 0, "canalRSVP": 0, "passWallet": 0, "grupos": [{}, { "grupo": { "name": "GA-SP Gold", "desc": "Grupo Alvo São Paulo Gold" } }, { "grupo": { "name": "GA-SP Silver", "desc": "Grupo Alvo São Paulo Silver" } }, { "grupo": { "name": "GA-SP Bronze", "desc": "Grupo Alvo São Paulo Bronze" } }, { "grupo": { "name": "GA-SP Silver", "desc": "Grupo Alvo São Paulo Silver" } }, { "grupo": { "name": "GA-SP Gold", "desc": "Grupo Alvo São Paulo Gold" } }], "convidados": [], "id": 2, "data_cadastro": "2017-01-25T23:57:59.226Z", "subTipoEvento": { "name": "ARTES VISUAIS" } }, { "nome": "CIRC DU SOLEIL", "tipoEvento": { "name": "ESPECIAIS", "percs": [30, 30, 5, 5, 10, 10, 2, 2, 6], "subs": [{ "name": "CARNAVAL" }, { "name": "CIRCO" }, { "name": "PALESTRAS" }] }, "programa": { "name": "Budget Q2 - Cliente Gold" }, "local": "BARRA", "dataInicio": "2017-07-12T03:00:00.000Z", "horaInicio": "08:00", "dataFim": "2017-08-15T03:00:00.000Z", "horaFim": "22:00", "descricao": "", "templateYMkt": 0, "cotas": "1500", "arquivoBanner": "", "arquivoPagina": "", "arquivoTeaser": "", "arquivoLogomarca": "", "arquivoRodape": "", "arquivoClassificacao": "", "canalEnvio": 0, "canalRSVP": 0, "passWallet": 0, "grupos": [{ "grupo": { "name": "GA-SP Gold", "desc": "Grupo Alvo São Paulo Gold" } }, { "grupo": { "name": "GA-SP Silver", "desc": "Grupo Alvo São Paulo Silver" } }], "convidados": [], "id": 3, "data_cadastro": "2017-01-26T00:00:00.819Z", "subTipoEvento": { "name": "CIRCO" } }, { "nome": "BRASIL X PARAGUAI", "tipoEvento": { "name": "ESPORTE", "percs": [30, 30, 5, 5, 10, 10, 2, 2, 6], "subs": [{ "name": "FUTEBOL" }, { "name": "TENIS" }, { "name": "BASQUETE" }, { "name": "OLIMPIADAS" }] }, "programa": { "name": "Budget Q3" }, "local": "indefinido", "dataInicio": "2017-03-28T03:00:00.000Z", "horaInicio": "08:00", "dataFim": "2017-03-28T03:00:00.000Z", "horaFim": "22:00", "descricao": "", "templateYMkt": 0, "cotas": "20000", "arquivoBanner": "", "arquivoPagina": "", "arquivoTeaser": "", "arquivoLogomarca": "", "arquivoRodape": "", "arquivoClassificacao": "", "canalEnvio": 0, "canalRSVP": 0, "passWallet": 0, "grupos": [{}, { "grupo": { "name": "GA-SP Silver", "desc": "Grupo Alvo São Paulo Silver" } }, {}, { "grupo": { "name": "GA-SP Gold", "desc": "Grupo Alvo São Paulo Gold" } }, { "grupo": { "name": "GA-SP Bronze", "desc": "Grupo Alvo São Paulo Bronze" } }, { "grupo": { "name": "GA-SP Gold", "desc": "Grupo Alvo São Paulo Gold" } }, {}, {}, {}, {}, {}, {}], "convidados": [], "id": 4, "data_cadastro": "2017-01-26T00:01:31.879Z", "subTipoEvento": { "name": "FUTEBOL" } }

            /*
            { "nome": "ESTUDO PARA MISSA CLARICE", "tipoEvento": { "name": "Concertos", "percs": [30, 30, 5, 5, 10, 10, 2, 2, 6] }, "programa": { "name": "Budget Q1 - Shows" }, "local": "Sesc Jundiaí", "dataInicio": "2017-02-20T03:00:00.000Z", "horaInicio": "20:00", "dataFim": "2017-02-20T03:00:00.000Z", "horaFim": "22:00", "descricao": "", "templateYMkt": 0, "cotas": "100", "arquivoBanner": "", "arquivoPagina": "", "arquivoTeaser": "", "arquivoLogomarca": "", "arquivoRodape": "", "arquivoClassificacao": "", "canalEnvio": 0, "canalRSVP": 0, "passWallet": 0, "grupos": [{ "grupo": { "name": "GA-SP Gold", "desc": "Grupo Alvo São Paulo Gold" } }], "convidados": [], "id": 0, "data_cadastro": "2017-01-20T12:28:50.862Z" },
            { "nome": "MARIA GADÚ", "tipoEvento": { "name": "Concertos", "percs": [30, 30, 5, 5, 10, 10, 2, 2, 6] }, "programa": { "name": "Budget Q1 - Shows" }, "local": "CARAGUATATUBA, SP", "dataInicio": "2017-02-22T03:00:00.000Z", "horaInicio": "16:00", "dataFim": "2017-02-22T03:00:00.000Z", "horaFim": "22:00", "descricao": "", "templateYMkt": 0, "cotas": "400", "arquivoBanner": "", "arquivoPagina": "", "arquivoTeaser": "", "arquivoLogomarca": "", "arquivoRodape": "", "arquivoClassificacao": "", "canalEnvio": 0, "canalRSVP": 0, "passWallet": 0, "grupos": [{ "grupo": { "name": "GA-SP Gold", "desc": "Grupo Alvo São Paulo Gold" } }, { "grupo": { "name": "GA-SP Silver", "desc": "Grupo Alvo São Paulo Silver" } }, { "grupo": { "name": "GA-SP Bronze", "desc": "Grupo Alvo São Paulo Bronze" } }], "convidados": [{ "name": "cliente1" }], "id": 1, "data_cadastro": "2017-01-20T12:31:22.515Z" },
            { "nome": "JOÃO BOSCO E VINÍCIUS", "tipoEvento": { "name": "Concertos", "percs": [30, 30, 5, 5, 10, 10, 2, 2, 6] }, "programa": { "name": "Budget Q2 - Cliente Gold" }, "local": "CARAGUATATUBA, SP", "dataInicio": "2017-03-07T03:00:00.000Z", "horaInicio": "20:00", "dataFim": "2017-03-07T03:00:00.000Z", "horaFim": "22:00", "descricao": "", "templateYMkt": 0, "cotas": "50", "arquivoBanner": "", "arquivoPagina": "", "arquivoTeaser": "", "arquivoLogomarca": "", "arquivoRodape": "", "arquivoClassificacao": "", "canalEnvio": 0, "canalRSVP": 0, "passWallet": 0, "grupos": [{}, { "grupo": { "name": "GA-SP Gold", "desc": "Grupo Alvo São Paulo Gold" } }, { "grupo": { "name": "GA-SP Silver", "desc": "Grupo Alvo São Paulo Silver" } }], "convidados": [{ "name": "cliente" }, { "name": "cliente" }], "id": 2, "data_cadastro": "2017-01-20T12:34:50.432Z" },
            { "nome": "São Paulo X Ponte Petra", "tipoEvento": { "name": "Jogos de Futebol", "percs": [10, 10, 10, 30, 10, 10, 5, 5, 10] }, "programa": { "name": "Budget Q3" }, "local": "Morumbi", "dataInicio": "2017-02-12T02:00:00.000Z", "horaInicio": "16:00", "dataFim": "2017-02-12T02:00:00.000Z", "horaFim": "22:00", "descricao": "", "templateYMkt": 0, "cotas": "10000", "arquivoBanner": "", "arquivoPagina": "", "arquivoTeaser": "", "arquivoLogomarca": "", "arquivoRodape": "", "arquivoClassificacao": "", "canalEnvio": 0, "canalRSVP": 0, "passWallet": 0, "grupos": [{ "grupo": { "name": "GA-SP Gold", "desc": "Grupo Alvo São Paulo Gold" } }, { "grupo": { "name": "GA-SP Silver", "desc": "Grupo Alvo São Paulo Silver" } }, { "grupo": { "name": "GA-SP Bronze", "desc": "Grupo Alvo São Paulo Bronze" } }], "convidados": [{ "name": "cliente" }, { "name": "cliente" }, { "name": "cliente" }, { "name": "cliente" }, { "name": "cliente" }, { "name": "cliente" }, { "name": "cliente" }, { "name": "cliente" }, { "name": "cliente" }], "id": 3, "data_cadastro": "2017-01-20T12:37:20.001Z" }
*/
        ];

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
                image: "images/kpi2 .png",
                target: '_self'
            }]
        }]
    });
