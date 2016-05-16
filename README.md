#Cook2gether how to run
##Week 2 - or how does this work?
1.
I've structured my based on this article http://vstark.net/2014/09/25/4-things-with-meteor/.

I say based because I didn't follow it literally, the main difference being that I have a folder in my client called "routers" here go all my routes. At the moment it consist of just one file named "routes.js". If this app would grow bigger every route would get it's own file.

The other thing I've done differently is I've also added a layouts file. This is where all the layout stuff goes that is on every page. Think navbar, footers and maybe other stuff. The last thing I've changed is call the "models" "methods" instead. The main stuff in that file are methods so just calling it methods seems more logic. 

2.
My collection, it basically only contains a name and createdby. And it can be removed. It's rather dull.
```javascript 
Ingredients = new Mongo.Collection('ingredients');

Meteor.methods({
  'ing.insert'(name){
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    Ingredients.insert({
      name: name,
      createdBy: Meteor.userId(),
    }) 
  },
  'ing.remove'(ingId){
    Ingredients.remove(ingId);
  }
});
```

3.
The users route contains a profile page, this is a reactive view where ingredients get updated on the fly. Also on the main page cooks get updated on the fly. 

4.
See 3.

5.
I am not sure what is meant here. I have however erased the insecure and autopublish packages, every input client does has to be checked by server now with methods. 

##Week 1 - or "Let's do this!!"
Just run meteor

Stuff for mvp

1. Users can log in, register (Probably with Facebook but else what is easiest to implement) - This is also my first data source
2. Users can add ingredients to their home - this is reactive, when you're looking at an user and the user is updating their ingredient list this gets updated live
3. Clickable user list
4. Every user has ingredient(s) 
5. Invite user to cook2gether

##Wishlist
- Google maps
- Road to other users
- Auto-complete ingredients with some open data source
- Recipe functionality, let users add recipes they wish to cook
- Recipe database with autocomplete (I'm looking for "stampot andijvie!")
- Search on ingredients 
- Nutrional information
- Diet restrictions
- Translate ingredients


##Data source
The user adds data / Facebook


###Data source on the wishlist
Use this data source 
https://github.com/Open-Food/Open-Food-Standard