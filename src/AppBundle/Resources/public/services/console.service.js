angular
    .module('appModule')
    .factory('Console', function($filter) {
        var date = function () {
            return $filter('date')(new Date(), 'yyyy-MM-dd HH:m:s');
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
                greetings: 'Aplikacja do pobierania informacji',
                name: 'console',
                height: 200,
                prompt: '#'
            });

        var parentEcho = terminal.echo;

        terminal.echo = function (text) {
            parentEcho('['+ date() +'] '+ text);
        };

        return terminal;
    });