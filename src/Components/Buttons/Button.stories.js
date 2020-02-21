import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

import Cart from '../Icons/Cart.svg'
import Heart from '../Icons/hearts.svg'


storiesOf("Button", module)
    .add('Primary', () => <Button 
        label="Do something"
        type="primary"
        white
        hover
    />)
    .add('Danger', () => <Button 
        label="Do something"
        type="danger"
        white
        hover
    />)
    .add('Success', () => <Button 
        label="Do something"
        type="success"
        white
        hover
    />)
    .add('Warning', () => <Button 
        label="Do something"
        type="warning"
        white
        hover
    />)
    .add('Default', () => <Button 
        label="Do something"
        white
        hover
    />)

    //Outline buttons
    .add('Primary Outline', () => <Button 
        label="Do something"
        type="primary"
        outline
    />)
    .add('Danger Outline', () => <Button 
        label="Do something"
        type="danger"
        outline
    />)
    .add('Success Outline', () => <Button 
        label="Do something"
        type="success"
        outline
    />)
    .add('Warning Outline', () => <Button 
        label="Do something"
        type="warning"
        outline
    />)
    .add('Default Outline', () => <Button 
        label="Do something"
        outline
    />)

    //Faded Buttons
    .add('Primary Faded', () => <Button 
        label="Do something"
        type="primary"
        fade
    />)
    .add('Danger Faded', () => <Button 
        label="Do something"
        type="danger"

        fade
    />)
    .add('Success Faded', () => <Button 
        label="Do something"
        type="success"
        fade
    />)
    .add('Warning Faded', () => <Button 
        label="Do something"
        type="warning"
        fade
    />)

    //Large Buttons
    .add('Primary Large', () => <Button 
        label="Do something"
        type="primary"
        large
        white
    />)
    .add('Danger Large', () => <Button 
        label="Do something"
        type="danger"
        large
        white
    />)
    .add('Success Large', () => <Button 
        label="Do something"
        type="success"
        large
        white
    />)
    .add('Warning Large', () => <Button 
        label="Do something"
        type="warning"
        large
        white
    />)
    .add('Default Large', () => <Button 
        label="Do something"
        large
        white
    />)


    //Large Outline Buttons
    .add('Primary Outline Large', () => <Button 
        label="Do something"
        type="primary"
        outline
        large
    />)
    .add('Danger Outline Large', () => <Button 
        label="Do something"
        type="danger"
        outline
        large
    />)
    .add('Success Outline Large', () => <Button 
        label="Do something"
        type="success"
        outline
        large
    />)
    .add('Warning Outline Large', () => <Button 
        label="Do something"
        type="warning"
        outline
        large
    />)
    .add('Default Outline Large', () => <Button 
        label="Do something"
        outline
        large
    />)

    // Large Faded Buttons

    .add('Primary Outline Large Faded', () => <Button 
        label="Do something"
        type="primary"
        fade
        large
    />)
    .add('Danger Outline Large Faded', () => <Button 
        label="Do something"
        type="danger"
        fade
        large
    />)
    .add('Success Outline Large Faded', () => <Button 
        label="Do something"
        type="success"
        fade
        large
    />)
    .add('Warning Outline Large Faded', () => <Button 
        label="Do something"
        type="warning"
        fade
        large
    />)
    .add('Default Outline Large Faded', () => <Button 
        label="Do something"
        fade
        large
    />)

    //Action Buttons
    .add('Cart With Text', () => <Button 
        label=" Add to Cart"
        type="primary"
        fade
        icon={Cart}
    />)
    .add('Cart No Text', () => <Button 
        type="primary"
        fade
        icon={Cart}
    />)
    .add('Heart With Text', () => <Button 
        label=" Add to Favorites"
        type="primary"
        fade
        icon={Heart}
    />)
    .add('Heart No Text', () => <Button 
        type="primary"
        fade
        icon={Heart}
    />)