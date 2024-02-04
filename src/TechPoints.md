In class method ```this``` key word cannot work in normal function. In order to make it work, convert the normal function to an arrow function. 

Or else bind it in contructor level.

Ex : 
```
constructor()
{
    this.<functionName> = this.<functionName>.bind(this);
}
```
