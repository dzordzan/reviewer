angular
    .module('appModule')
    .factory('Console', function($filter) {
        var date = function () {
            return $filter('date')(new Date(), 'yyyy-MM-dd HH:mm:ss');
        };

        var terminal =
            $('#console').terminal(function(command, term) {
                if (command !== '') {
                    var result = window.eval(command);
                    if (result != undefined) {
                        term.echo(String(result));
                    }
                }
            }, {
                greetings: 'Wersja aplikacji 0.0.1',
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