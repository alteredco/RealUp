import React, { Component } from 'react';

const data = ["You are allowed to be both a masterpiece and a work in progress simultaneously. –Sophia Bush", "The woman who does not require validation from anyone is the most feared individual on the planet. –Mohadesa Najumi", "I am not lucky. You know what I am? I am smart, I am talented, I take advantages of opportunities that come my way and I work really, really hard. Don’t call me lucky. Call me badass. –Shonda Rhimes", "Confidence is not ‘They will like me.’ Confidence is ‘I’ll be fine if they don’t.’ –Christina Grimmie", "When you do compare, at least do it accurately: failures against failures and highlights against highlights. Measuring your biggest flop against someone else’s red-carpet moment is just bad logic. –Meagan Francis",  "If you want to life your best life ever, you’ve got to be intentional about it. Think about it, speak about it, feel it like it;its already here. Trust that what you want is on its way. –Carrie Green","It’s not who you are that holds you back; it’s who you think you’re not. –unknown", "You don’t have to be an expert. No one is expecting you to be an expert. All you need to do is show up and be you. –Ruth Soukup","No one can make you feel inferior without your consent. –Eleanor Roosevelt", "You must do do the thing you think you cannot do. –Eleanor Roosevelt",  "Have confidence in your ability to do it right, and work hard to do the best possible job. –Walt Disney", "Failure is success in progress. –Albert Einstein",  "You may encounter many defeats, but you must not be defeated. In fact, it may be necessary to encounter the defeats, so you can know who you are, what you can raise from, how you can still come out of it. –Maya Angelou"
  ];

  class RandQuote extends Component {
    randomiseQuotes(MyArr) {
      return MyArr[Math.floor(Math.random() * MyArr.length)]
    }

    render() {
          return (
            <div className="col s12 m12 l8 flow-text">
              { this.randomiseQuotes(data) }
            </div>
      )
    }
  }


export default RandQuote;