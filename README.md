# Reviewer

Reviewer is aplication which parse products from Ceneo pl service and looking for similar products in Skapiec pl service.

Apliaction is totaly free and it was created for learning duties on Data Warehouse course.

Aplication is based on:
- Symfony 3
- AngularJS 1.*
- and many more libraries

### Version
0.0.1

### Technologies

Reviewer uses a number of open source projects to work properly:

* [AngularJS] - HTML enhanced for web apps!
* [Marked] - a super fast port of Markdown to JavaScript
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [node.js] - evented I/O for the backend
* [jQuery] - duh
* [Symfony3]- for backend responsibilties
* [AngularJS Bootstrap] - bootsrap with support directives in angular
And of course Reviewer itself is open source with a [public repository][dill]
 on GitHub.

### Installation

You need Composer and git installed globally then:

```sh
$ git clone https://github.com/dzordzan/reviewer.git reviewer
cd reviewer
composer install
```
Installator will ask you for database parameters which are required

After installation complete:
```sh
$ php app/console assets:install
$ php app/console assetic:dump
$ php app/console doctrine:schema:update --force
```

Fine! Your project has been set up.

### Plugins

Reviewer has many plugins, but already included on repository

### Readmes, how to project works can be found here:

* [Frontend layer] [PlDb]
* [Backend layer] [PlGh]
* [Database] [PlGd]
* [User documentation] [PlOd]

### Development

Want to contribute? Great!

Make a pull request and we will merge your updates

### Todos

 - Write Tests
 - Rethink Github Save
 - Add Code Comments
 - Add Night Mode

License
----

Public


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [dill]: <https://github.com/dzordzan/reviewer.git>
   [git-repo-url]: <https://github.com/dzordzan/reviewer.git>
   [john gruber]: <http://daringfireball.net>
   [@thomasfuchs]: <http://twitter.com/thomasfuchs>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [marked]: <https://github.com/chjj/marked>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [keymaster.js]: <https://github.com/madrobby/keymaster>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Symfony3]: <http://symfony.com>
   [AngularJS Bootstrap]: <https://angular-ui.github.io/bootstrap/m>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/dzordzan/reviewer/tree/master/app/Resources/doc/javascript/README.md>
   [PlGh]:  <https://github.com/dzordzan/reviewer/tree/master/app/Resources/doc/php/README.md>
   [PlGd]: <https://github.com/dzordzan/reviewer/tree/master/app/Resources/doc/database/README.md>
   [PlOd]: <https://github.com/dzordzan/reviewer/tree/master/app/Resources/doc/user/README.md>


