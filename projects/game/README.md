# Dragon Fighters

## Setting

This game takes place in a small town with dragons! There are multiple endings, but I won't give spoilers!

## Map

```mermaid
graph TD;
    mountains(Mountains)<-->Backyard;

    Backyard<-->house;

    house(((House)))<-->townHall[Town Hall];

    townHall<-->Lake;
    townHall<-->Forest;
    townHall<-->comps[Dragon Competitions];
    townHall<-->Vet;

    comps<-->easy[Easy Room];
    comps<-->mid[Medium Room];
    comps<-->hard[Hard Room];

```

In the game, the player starts in the house. The mountains behind the house are hidden to begin with, so the player must look for them to find them.