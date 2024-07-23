// index.tsx
// import DateTimePicker from '@react-native-community/datetimepicker';
import React from 'react';
import { Pressable, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import { styles } from './styles';

function onCheckDateElement(value,min,max,dateElement)
{
    ///////////////////////////////////////////////////////////////////////////////
    // bad input: value not b/t [min,max];      set to current date element 
    //            value not a number at all;    set to current date element
    // note:      this is a soft error handle 
    // note:      assuming date is in the current year for now, no field for this.
    // question:  what is the better solution?
    ///////////////////////////////////////////////////////////////////////////////
    let date
    switch (dateElement)
    {
        case "day":
            date = new Date().getDay();
            break;
        case "month":
            date = new Date().getMonth();
            break;
        // case "year":
        //     date = new Date().getYear();
        //     break;
        default:
            break;
    }
    const parsedQty = Number.parseInt(value)
    const badInput  = (parsedQty < min || parsedQty > max) || (Number.isNaN(parsedQty));
    (badInput) ? setQuantity(date):setQuantity(parsedQty);
}

export default function CreateEvent()
{
    const [eventText, onChangeEventText]                            = React.useState(new String());
    const [eventTagline, onChangeEventTagline]                      = React.useState(new String());
    const [eventDescription, onChangeEventDescription]              = React.useState(new String());
    const [eventHostEmail, onChangeHostEmail]                       = React.useState(new String());
    const [eventHashtag, onChangeEventHashtag]                      = React.useState(new String());
    const [eventPrice, onChangeEventPrice]                          = React.useState(0.0);
    const [eventRegURL, onChangeEventRegURL]                        = React.useState(new String());
    const [eventMonth, onChangeEventMonth]                          = React.useState(new String());
    const [eventDay, onChangeEventDay]                              = React.useState(new String());
    const [foodSwitchEnabled, foodSwitchSetToEnabled]               = React.useState(false);
    const [giveawaySwitchEnabled, giveawaySwitchSetToEnabled]       = React.useState(false);
    const [gamingSwitchEnabled, gamingSwitchSetToEnabled]           = React.useState(false);
    const [keynoteSwitchEnabled, keynoteSwitchSetToEnabled]         = React.useState(false);
    const [liveMusicSwitchEnabled, liveMusicSwitchSetToEnabled]     = React.useState(false);
    const [workshopSwitchEnabled, workshopSwitchSetToEnabled]       = React.useState(false);
    const [commServiceSwitchEnabled, commServiceSwitchSetToEnabled] = React.useState(false);
    const toggleFoodSwitch          = () => {foodSwitchSetToEnabled(previousState => !previousState);};
    const toggleGiveawaySwitch      = () => {giveawaySwitchSetToEnabled(previousState => !previousState);};
    const toggleGamingSwitch        = () => {gamingSwitchSetToEnabled(previousState => !previousState)};
    const toggleKeynoteSwitch       = () => {keynoteSwitchSetToEnabled(previousState => !previousState);};
    const toggleLiveMusicSwitch     = () => {liveMusicSwitchSetToEnabled(previousState => !previousState);};
    const toggleWorkshopSwitch      = () => {workshopSwitchSetToEnabled(previousState => !previousState);};
    const toggleCommServiceSwitch   = () => {commServiceSwitchSetToEnabled(previousState => !previousState);};
    return
    (
        <View>
            {/*Name of Event*/}
            <TextInput
                style           = {styles.input}
                onChangeText    = {onChangeEventText}
                value           = {eventText}
                placeholder     = "Name of Event"
                maxLength       = {100}
                inputType       = "text"
            />
            {/*Event Tagline*/}
            <TextInput
                style           = {styles.input}
                onChangeText    = {onChangeEventTagline}
                value           = {eventTagline}
                maxLength       = {72}
                placeholder     = "Tagline (Short Promo)"
                inputType       = 'default'
            />

            {/*Event Hashtag*/}
            <TextInput
                style           = {styles.input}
                id              = 'event-hashtag'
                onChangeText    = {onChangeEventHashtag}
                value           = {eventHashtag}
                maxLength       = {64}
                placeholder     = "#hashtag"
                inputType       = 'default'
            />

            {/* Description */}
            <TextInput
                style           = {styles.inputDescription}
                onChangeText    = {onChangeEventDescription}
                value           = {eventDescription}
                multiline       = {true}
                placeholder     = "Description"
                inputType       = "text"
            />
            {/* Event Price */}
             <TextInput
                inputMode       = 'decimal'
                maxLength       = {5}
                style           = {styles.input}
                onChangeText    = {onChangeEventPrice}
                value           = {eventPrice}
                placeholder     = "Price (0 = free)"
                inputType       = 'decimal-pad'
            />
            {/* Event Date : month */}
             <TextInput
                inputMode       = 'numeric'
                maxLength       = {2}
                style           = {styles.input}
                onChangeText    = {onChangeEventMonth}
                value           = {eventMonth}
                placeholder     = "Monthhh (1-12)"
                inputType       = 'numbers-and-punctuation'
            />
            {/* Event Date : day */}
             <TextInput
                inputMode       = 'numeric'
                maxLength       = {2}
                style           = {styles.input}
                onChangeText    = {onChangeEventDay}
                value           = {eventDay}
                placeholder     = "Day (1-31)"
                inputType       = 'numbers-and-punctuation'
            />

            {/* RSVP/Registrationurl*/}
            <TextInput
                inputMode       = 'url'
                maxLength       = {100}
                style           = {styles.input}
                onChangeText    = {onChangeEventRegURL}
                value           = {eventRegURL}
                placeholder     = "rsvp/registration link"
                inputType       = 'url'
            />
            <Text style                 = {styles.switchText}>
                Food
                <Switch
                    style               = {styles.switch}
                    trackColor          = {{false: '#767577', true: '#81b0ff'}}
                    thumbColor          = {foodSwitchEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor = "#3e3e3e"
                    onValueChange       = {toggleFoodSwitch}
                    value               = {foodSwitchEnabled}
                />
            </Text>
            <Text style                 = {styles.switchText}>
                Giveaways
                <Switch
                    style               = {styles.switch}
                    trackColor          = {{false: '#767577', true: '#81b0ff'}}
                    thumbColor          = {giveawaySwitchEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor ="#3e3e3e"
                    onValueChange       = {toggleGiveawaySwitch}
                    value               = {giveawaySwitchEnabled}
                />
            </Text>
            <Text style                 = {styles.switchText}>
               Gaming
                <Switch
                    style               = {styles.switch}
                    trackColor          = {{false: '#767577', true: '#81b0ff'}}
                    thumbColor          = {gamingSwitchEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor = "#3e3e3e"
                    onValueChange       = {toggleGamingSwitch}
                    value               = {gamingSwitchEnabled}
                />
            </Text>
            <Text style                 = {styles.switchText}>
                Keynote Speaker
                <Switch
                    style               = {styles.switch}
                    trackColor          = {{false: '#767577', true: '#81b0ff'}}
                    thumbColor          = {keynoteSwitchEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor = "#3e3e3e"
                    onValueChange       = {toggleKeynoteSwitch}
                    value               = {keynoteSwitchEnabled}
                />
            </Text>
            <Text style                 = {styles.switchText}>
                Live Music
                <Switch
                    style               = {styles.switch}
                    trackColor          = {{false: '#767577', true: '#81b0ff'}}
                    thumbColor          = {liveMusicSwitchEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor ="#3e3e3e"
                    onValueChange       = {toggleLiveMusicSwitch}
                    value               = {liveMusicSwitchEnabled}
                />
            </Text>
            <Text style                 = {styles.switchText}>
               Workshop/Training
                <Switch
                    style               = {styles.switch}
                    trackColor          = {{false: '#767577', true: '#81b0ff'}}
                    thumbColor          = {workshopSwitchEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor ="#3e3e3e"
                    onValueChange       = {toggleWorkshopSwitch}
                    value               = {workshopSwitchEnabled}
                />
            </Text>
            <Text style                 = {styles.switchText}>
              Community Service
                <Switch
                    style               = {styles.switch}
                    trackColor          = {{false: '#767577', true: '#81b0ff'}}
                    thumbColor          = {commServiceSwitchEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor = "#3e3e3e"
                    onValueChange       = {toggleCommServiceSwitch}
                    value               = {commServiceSwitchEnabled}
                />
            </Text>
            <Pressable style={styles.pressable}>
                {
                    ({pressed}) => (
                        <Text style={styles.text}>{pressed ? 'Event Created!' : 'Create Event'}</Text>
        )}
            </Pressable>
        </View>
    );
}