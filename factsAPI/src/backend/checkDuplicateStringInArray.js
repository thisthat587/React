function hasDuplicateStrings(arr) {
    const stringMap = {}; // Object to store encountered strings
    for (let str of arr) {
        if (stringMap[str]) {
            // If the string is already encountered, return true (duplicate found)
            return str;
        } else {
            // Otherwise, mark the string as encountered
            stringMap[str] = true;
        }
    }
    // If no duplicates found, return false
    return false;
}

// Example usage:
const randomFacts = [
    "The first computer programmer was Ada Lovelace.",
    "JavaScript was created by Brendan Eich in 10 days.",
    "The first electronic computer, ENIAC, weighed more than 27 tons.",
    "The term 'bug' was coined when a moth caused a computer malfunction.",
    "The first domain name ever registered was symbolics.com.",
    "The QWERTY keyboard layout was designed to prevent typewriter jams.",
    "The first computer virus was created in 1983 and was called the 'Elk Cloner'.",
    "The concept of object-oriented programming (OOP) was pioneered by Alan Kay in the 1960s.",
    "The first high-level programming language was FORTRAN, developed in 1957.",
    "The term 'bug' was first used by Grace Hopper in 1947 when she found a moth causing a malfunction in the Harvard Mark II computer.",
    "The COBOL programming language was designed specifically for business applications.",
    "The concept of the Turing machine, a theoretical model of computation, was introduced by Alan Turing in 1936.",
    "The first compiler for a programming language was developed by Grace Hopper for the A-0 System in the early 1950s.",
    "The concept of open-source software was popularized by Richard Stallman with the GNU Project in the 1980s.",
    "The first computer virus to spread in the wild was the Creeper virus, which infected ARPANET systems in the early 1970s.",
    "The concept of a 'byte' was introduced by Werner Buchholz in 1956 to represent the smallest addressable unit of memory.",
    "The concept of a 'bit' (binary digit) was first proposed by Claude Shannon in 1948 in his paper 'A Mathematical Theory of Communication'.",
    "The concept of structured programming was formalized by Edsger Dijkstra in the late 1960s.",
    "The first compiler written in a high-level programming language was the A-0 System for the UNIVAC I computer, developed in the early 1950s.",
    "The concept of the World Wide Web was proposed by Tim Berners-Lee while working at CERN in 1989.",
    "The concept of a 'bug' in computing predates electronic computers and was used to describe mechanical malfunctions in early calculating machines.",
    "The first programmable computer was the Z3, created by German engineer Konrad Zuse in 1941.",
    "The concept of virtual memory was first proposed by Tom Kilburn and Frederick Williams in 1946 for the Manchester Mark I computer.",
    "The concept of a 'kernel' in operating systems was introduced by Fernando J. Corbató in the early 1960s.",
    "The concept of a 'stack' in programming was first described by Klaus Samelson and Friedrich L. Bauer in 1957.",
    "The concept of a 'queue' in programming was first described by Jon von Neumann in 1945.",
    "The concept of 'garbage collection' in programming languages was introduced by John McCarthy in the late 1950s.",
    "The concept of a 'pointer' in programming was first introduced by Arthur Burks, Herman Goldstine, and John von Neumann in the late 1940s.",

    "The first computer mouse was made of wood.",
    "The first electronic mail was sent by Ray Tomlinson in 1971.",
    'Debugging is twice as hard as writing the code in the first place.',
    'Coding can improve problem-solving skills.',
    'The first website went live on August 6, 1991.',
    'The average computer today is more powerful than the first supercomputer, Cray-1.',
    "Debugging is like finding a needle in a haystack, but without knowing what a needle looks like.",
    "Programming is the art of debugging a blank sheet of paper.",
    "The best code is no code at all, because it can't contain bugs.",
    "Programming is 10% writing code and 90% figuring out why it doesn't work.",
    "The only code that is bug-free is the one you haven't written yet.",
    "The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time.",
    "Code never lies, comments sometimes do.",
    "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
    "The only thing worse than not having code comments is having outdated code comments.",
    "Software development is a race between programmers trying to build bigger and better idiot-proof programs, and the universe trying to produce bigger and better idiots. So far, the universe is winning.",
    "The term 'bug' originated when a moth got stuck in the hardware of a computer.",
    "The concept of 'software engineering' was first proposed by Margaret Hamilton.",
    "The first computer virus was created as an experiment in self-replicating code.",
    "The 'Hello, World!' program is traditionally used as the first program students write in a new programming language.",
    "The World Wide Web was invented by Tim Berners-Lee in 1989.",
    "The longest amount of time spent debugging a single issue is reported to be over a year.",
    "The first computer mouse was invented by Douglas Engelbart in 1964.",
    "The first programming language was Assembly, used for programming early computers."

];
console.log(hasDuplicateStrings(randomFacts)); // Output: true


