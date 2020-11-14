Hackathon 2020 Plano Hackers
=========

This initial repo will host our idea when we come up with it 

<img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/red-big-question-mark-and-toon-man-faq-ask-search-concepts-michal-bednarek.jpg" alt="drawing" width="200"/>


Table of contents
=================

<!--ts-->
   * [FusionFabric.Cloud Logo Usage Guidelines](#FusionFabric.Cloud-Logo-Usage-Guidelines)
   * [ReactJS](#ReactJS)
   * [elixir](#elixir)
   * [Phoenix](#Phoenix)
   * [AWS](#AWS)
<!--te-->

FusionFabric.Cloud Logo Usage Guidelines
============
#### The marketing assets are usually the best place to find logos, icons, and color palettes codes. 


<!DOCTYPE html>
<html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
      * { box-sizing: border-box;}
        .column {
            float: left;
            width: 33%;
            padding: 5px;
            height: 400px;
        }
        .row {
            width: 100%;
            padding: 5px;
            height: 600px;
        }
        /* body {
  background-image: url('https://raw.githubusercontent.com/PlanoHackers2020/HackathonInitRepo/main/photos/cl1.JPG');
} */
    </style>
    </head>
    <div class="row" style="background-image: url('https://www.plexiglas.de/files/plexiglas-content/main/produkte/plexiglas/trendfarben/trendfarbe_2018.jpg'" >
    <br>
    <br>
    <br>
    <body>
        <div class="row"> 
            <div class="column"> </div>
            <div class="column"> </div>
            <div class="column">
                <div style="text-align:left"> <p style="color:white"; >
                    <b>Origins:</b> <br>
                    <b>FIN</b> – Finance <br>
                    <b>ASTRA</b> – Star (Latin)
                    <br></br>
                    <b>Meaning:</b><br>
                    We are a new star, born in the wide universe<br>
                    of financial software. Unlocking the potential<br>
                    of people and businesses by leading them<br>
                    into the open future of finance.<br>
                    <br>
                    <ul style="color:white">
                        <li>Leading customers through transformation,<br>
                        from closed legacy systems to a future of<br>
                        open architecture.<br></li>
                        <li>Leading the development, deployment<br>
                        and consumption of financial services
                        software, towards a more innovative,
                        collaborative and open approach. </li>
                    </ul>
                </div></div>
            </div> </p>
        </div></div>
    </body>
</html>
 
# [PDF guide](https://www.fusionfabric.cloud/sites/default/files/files/2018-06/ffdc-logo-guide.pdf)
<!-- <img src="https://raw.githubusercontent.com/PlanoHackers2020/HackathonInitRepo/main/photos/cl1.JPG" alt="drawing" width="100%"/> -->

<br>
<br><br>
<br><br>
<br>

ReactJS
============
https://reactjs.org/tutorial/tutorial.html

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="drawing" width="15%"/>

```js
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

// Example usage: <ShoppingList name="Mark" />
```



elixir
============
<img src="https://elixir-lang.org/images/logo/logo.png" alt="drawing" width="15%"/>

https://elixir-lang.org/

```js
current_process = self()

# Spawn an Elixir process (not an operating system one!)
spawn_link(fn ->
  send(current_process, {:msg, "hello world"})
end)

# Block until the message is received
receive do
  {:msg, contents} -> IO.puts(contents)
end
```

Phoenix
============
[Phoenix](https://www.phoenixframework.org/)

![alt text](https://raw.githubusercontent.com/phoenixframework/phoenix/master/priv/static/phoenix.png "img9.jpg")



```js
├── _build
├── assets
├── config
├── deps
├── lib
│   └── hello
│   └── hello.ex
│   └── hello_web
│   └── hello_web.ex
├── priv
└── test
```


AWS
=====

##PlanoHackers2020
<img src="https://thewealthmosaic.s3.amazonaws.com/media/Logo_Amazon_Web_Services_2.png" alt="drawing" width="15%"/>

