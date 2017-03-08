'use strict';

page('/', Project.fetchAll);
page('/tech-skills',tech.init);
page('/projects',projs.init);
page('/about',aboutMe.init);
page();
