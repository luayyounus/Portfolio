'use strict';

page('/', Project.fetchAll);
page('/tech',tech.init);
page('/projects',projs.init);
page('/about',aboutMe.init);
page();
