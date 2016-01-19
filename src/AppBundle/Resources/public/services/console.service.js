angular
    .module('appModule')
    .factory('Console', function($filter, $rootScope, ipCookie) {
        var date = function () {
            return $filter('date')(new Date(), 'yyyy-MM-dd HH:mm:ss');
        };
        function stringStartsWith (string, prefix) {
            return string.slice(0, prefix.length) == prefix;
        }

        var terminal =
            $('#console').terminal(function(command, term) {
                if (command !== '') {

                    if (stringStartsWith(command, 'product')) {
                        $rootScope.$emit('product', command);
                        return;
                    }

                    if (stringStartsWith(command, 'process')) {
                            ipCookie('process',
                                command.split('=')[1]).replace(/^\s\s*/, '').replace(/\s\s*$/, '');
                            term.echo('Zmienna process została zapisana!')
                        return;
                    }

                    var result = window.eval(command);
                    if (result != undefined) {
                        term.echo(String(result));
                    }
                }
            }, {
                greetings: 'Wersja aplikacji 0.0.1'+
                '\nwpisz: [[b;lime;]process=auto] aby zautomatyzować proces pobierania danych'+
                ' lub [[b;lime;]process=manual] aby przywrócić domyślnie',
                name: 'console',
                height: 150,
                prompt: '#'
            });

        var parentEcho = terminal.echo;

        terminal.echo = function (text) {
            parentEcho('['+ date() +'] '+ text);
        };

        return terminal;
    });