/* In this task, make a madlibs templates story
using JS string template literals. In the story
variable, write out the template of your madlibs
using string variables in the place of certain
nouns, adjectives, and verbs */

// Variables, i.e.
const noun1 = 'mouse';
const noun2 = 'dog';
const verb1 = 'ate';
const verb2 = 'jumped';
const verb3 = 'walk';
const adj1 = 'tall';
const adj2 = 'purple';
const adj3 = 'funny';

//Change thses values to generate a different story

const story = `There once was a ${adj1} ${noun1} named Chuck. Chuck was very ${adj2}. Chuck was so ${adj2} that he
${verb1} the ${adj3} ${noun2} so hard that it ${verb2}. The moral of the story is dont ${verb3} with Chuck`;

console.log(story);
