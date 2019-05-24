import React from 'react';
import {
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Image,
    ImageBackground,
    Dimensions
} from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';

import { materialTheme, products, Images } from '../constants/';
import { Select, Icon, Header, Product, Switch } from '../components/';

const { width } = Dimensions.get('screen');

const thumbMeasure = (width - 48 - 32) / 3;

export default class Entries_Home extends React.Component {
    render() {
        return (
            <Block flex>
                <Text bold size={16} style={styles.title}>Buttons</Text>
                <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
                    <Block center>
                        <Button shadowless color={materialTheme.COLORS.DEFAULT} style={[styles.button, styles.shadow]}>
                            DEFAULT
            </Button>
                    </Block>
                    <Block center>
                        <Button shadowless style={[styles.button, styles.shadow]}>
                            PRIMARY
            </Button>
                    </Block>
                    <Block center>
                        <Button shadowless color="info" style={[styles.button, styles.shadow]}>
                            INFO
            </Button>
                    </Block>
                    <Block center>
                        <Button shadowless color="success" style={[styles.button, styles.shadow]}>
                            SUCCESS
            </Button>
                    </Block>
                    <Block center>
                        <Button shadowless color="warning" style={[styles.button, styles.shadow]}>
                            WARNING
            </Button>
                    </Block>
                    <Block center>
                        <Button shadowless color="error" style={[styles.button, styles.shadow]}>
                            ERROR
            </Button>
                    </Block>
                    <Block row space="evenly">
                        <Block flex left>
                            <Select
                                defaultIndex={1}
                                options={[1, 2, 3, 4, 5]}
                                style={styles.shadow}
                            />
                        </Block>
                        <Block flex center>
                            <Button
                                center
                                shadowless
                                color={materialTheme.COLORS.DEFAULT}
                                textStyle={styles.optionsText}
                                style={[styles.optionsButton, styles.shadow]}>
                                DELETE
              </Button>
                        </Block>
                        <Block flex={1.25} right>
                            <Button
                                center
                                shadowless
                                color={materialTheme.COLORS.DEFAULT}
                                textStyle={styles.optionsText}
                                style={[styles.optionsButton, styles.shadow]}>
                                SAVE FOR LATER
              </Button>
                        </Block>
                    </Block>
                </Block>
            </Block>
        )
    }
}