# React Component Libary

For this project, I created a React Component Library utilizing Storybook based off an Adobe XD Mock-up. [Click Here](https://vigilant-mayer-c30ebd.netlify.com/) for the deployed library.

## Development

From the mock-up, I initially attempted to identify patterns with the component stylings so as to determine default stylings and required props. Additional stylings were added as props for size, colors, etc.

## Challenges

Creating the button components was mostly straightforward as they all held similar properties. I utilized the same approach for the forms, which led to messier code, as there were fewer consistencies across the different components. In future iterations of this library, I would like to breakdown the forms into their own respective subcomponents and import them into the stories file for improved readability and to more easily track and modify them.

I also found that styling the select and checkbox forms was quite difficult as these HTML elements have default styling and behavior which must be reset. The checkbox was particularly difficult. To work around this, I created a span element that was superimposed on the checkbox input so that it could be more easily styled when clicked:

``` CSS

.form-checkbox input:checked ~ .checkmark {
    background-color: #33A0FF;
}

```


## Built With

* React JS
* CSS

