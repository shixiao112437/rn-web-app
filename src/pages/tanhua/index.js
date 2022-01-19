import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, ImageBackground, Image } from 'react-native';
import NavTop from '../../components/Nav';
import Swiper from 'react-native-deck-swiper'
const style = StyleSheet.create({
    card: {
        backgroundColor: "#ffffff9a",
        height: "60%",

    }
})
const cards = [
    {
        uri:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fci.xiaohongshu.com%2F50fd3188-0812-21ad-b415-24ae901643cf%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fci.xiaohongshu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641615602&t=978e03533450d32016db879de6f05253"
    },
    {
        uri: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201708%2F31%2F20170831114250_tiZhc.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641615602&t=ef85761d137beeeefc9aa00dbd73c85c",
    },
    {
        uri:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201603%2F27%2F20160327110046_nRyuE.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641615602&t=7f6356dadaa4fb67379f3d5f91580f9a"
    },
    {
        uri:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fci.xiaohongshu.com%2F50fd3188-0812-21ad-b415-24ae901643cf%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fci.xiaohongshu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641615602&t=978e03533450d32016db879de6f05253"
    },
    {
        uri:"https://bpic.588ku.com/back_list_pic/21/07/09/287375a18d4f0ae5f592de31801ba151.jpg!/fw/630/quality/90/unsharp/true/compress/true"
    },
    {
        uri:"https://bpic.588ku.com/back_list_pic/21/08/03/ac788be4b1a8e904032f0244ee045243.jpg!/fw/630/quality/90/unsharp/true/compress/true"
    },
  

]
export default class index extends Component {
    state = {
        cards: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        swipedAllCards: false,
        swipeDirection: '',
        cardIndex: 0
    }
    renderCard = (card, index) => {
        return (
            <View style={style.card}>
                <Image style={{ width: "100%", height: "100%" }} source={{ uri: card.uri }} />
                <Text style={{color:'#fff'}}>{card.uri}</Text>
            </View>
        )
    };

    onSwiped = (type) => {
        console.log(`on swiped ${type}`)
    }

    onSwipedAllCards = () => {
        this.setState({
            swipedAllCards: true
        })
    };

    swipeLeft = () => {
        this.swiper.swipeLeft()
    };
    render() {
        return (
            <View style={{ flex: 1 }}>
                <NavTop>探花交友</NavTop>
                <ImageBackground imageStyle={{ height: '100%' }} style={{ height: "70%" }} source={require('../../assets/images/thbg.jpeg')}>
                    <Swiper
                        ref={swiper => {
                            this.swiper = swiper
                        }}
                        cardVerticalMargin={20}
                        onSwiped={() => this.onSwiped('general')}
                        onSwipedLeft={() => this.onSwiped('left')}
                        onSwipedRight={() => this.onSwiped('right')}
                        onSwipedTop={() => this.onSwiped('top')}
                        onSwipedBottom={() => this.onSwiped('bottom')}
                        onTapCard={this.swipeLeft}
                        cards={cards}
                        cardIndex={this.state.cardIndex}
                        cardVerticalMargin={80}
                        renderCard={this.renderCard}
                        onSwipedAll={this.onSwipedAllCards}
                        stackSize={10}
                        stackSeparation={15}
                        overlayLabels={{
                            bottom: {
                                title: 'BLEAH',
                                style: {
                                    label: {
                                        backgroundColor: 'black',
                                        borderColor: 'black',
                                        color: 'white',
                                        borderWidth: 1
                                    },
                                    wrapper: {
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }
                                }
                            },
                            left: {
                                title: 'NOPE',
                                style: {
                                    label: {
                                        backgroundColor: 'black',
                                        borderColor: 'black',
                                        color: 'white',
                                        borderWidth: 1
                                    },
                                    wrapper: {
                                        flexDirection: 'column',
                                        alignItems: 'flex-end',
                                        justifyContent: 'flex-start',
                                        marginTop: 30,
                                        marginLeft: -30
                                    }
                                }
                            },
                            right: {
                                title: 'LIKE',
                                style: {
                                    label: {
                                        backgroundColor: 'black',
                                        borderColor: 'black',
                                        color: 'white',
                                        borderWidth: 1
                                    },
                                    wrapper: {
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        marginTop: 30,
                                        marginLeft: 30
                                    }
                                }
                            },
                            top: {
                                title: 'SUPER LIKE',
                                style: {
                                    label: {
                                        backgroundColor: 'black',
                                        borderColor: 'black',
                                        color: 'white',
                                        borderWidth: 1
                                    },
                                    wrapper: {
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }
                                }
                            }
                        }}
                        animateOverlayLabelsOpacity
                        animateCardOpacity
                        swipeBackCard
                        backgroundColor={'transparant'}
                    >
                        <Button onPress={() => this.swiper.swipeBack()} title='Swipe Back' />
                    </Swiper>
                </ImageBackground>

            </View>
        )
    }
}
