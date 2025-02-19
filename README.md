# Gilded Rose

### Project overview

This is the Gilded Rose kata in JavaScript with Jest that I'm doing as a practice tech test taking place on week 10 of the Makers course.
The aim is to practice OO design and TDD skills within the framework of a tech test that an employer might send you when applying for a role.

**Project specs**
This challenge will be the Gilded Rose kata commonly used as a tech test to assess a candidate's ability to read, refactor and extend legacy code.

**Project approach**

- My first step was to download the dependencies outlined in README.md.
- Following this, I ran the existing tests and fixed them.
- Next I went through the existing code to break it down line by line and understand what was happening.
- From there I create an input output table and wrote tests for the working code to ensure full coverage.
- Once I had my tests in place, I deleted the legacy code and commented out all but one of my tests so that I could replicate a TDD approach. I made a test pass, then I uncommented the next test and repeated this until all tests passed.
- Once all tests were passing, I decided to refactor as I felt that there was too much responsibility on the Shop class and so I look for a way to create additional classes, using the items, to ease the burden from just one class.

**How to run the project**

### Getting started

Install dependencies

```sh
npm install
```

To run program using texttest_fixture.js

```sh
node test/texttest_fixture.js
```

```sh
node test/texttest_fixture.js 20 (will run the program 20 times)
```

## Running tests

To run all tests

```sh
npm test
```

To run all tests in watch mode

```sh
npm run test:watch
```

To generate test coverage report

```sh
npm run test:coverage
```

To run eslint

```sh
eslint test/**
eslint src/**
```

**Code in Action - Output Examples**

```sh
-------- day 0 --------
name, sellIn, quality
+5 Dexterity Vest,
10,
20
Aged Brie,
2,
0
Elixir of the Mongoose,
5,
7
Sulfuras, Hand of Ragnaros,
0,
80
Sulfuras, Hand of Ragnaros,
-1,
80
Backstage passes to a TAFKAL80ETC concert,
15,
20
Backstage passes to a TAFKAL80ETC concert,
10,
49
Backstage passes to a TAFKAL80ETC concert,
5,
49
Conjured Mana Cake,
3,
6

-------- day 1 --------
name, sellIn, quality
+5 Dexterity Vest,
9,
19
Aged Brie,
1,
1
Elixir of the Mongoose,
4,
6
Sulfuras, Hand of Ragnaros,
0,
80
Sulfuras, Hand of Ragnaros,
-1,
80
Backstage passes to a TAFKAL80ETC concert,
14,
21
Backstage passes to a TAFKAL80ETC concert,
9,
50
Backstage passes to a TAFKAL80ETC concert,
4,
50
Conjured Mana Cake,
2,
4

-------- day 2 --------
name, sellIn, quality
+5 Dexterity Vest,
8,
18
Aged Brie,
0,
2
Elixir of the Mongoose,
3,
5
Sulfuras, Hand of Ragnaros,
0,
80
Sulfuras, Hand of Ragnaros,
-1,
80
Backstage passes to a TAFKAL80ETC concert,
13,
22
Backstage passes to a TAFKAL80ETC concert,
8,
50
Backstage passes to a TAFKAL80ETC concert,
3,
50
Conjured Mana Cake,
1,
2
```
