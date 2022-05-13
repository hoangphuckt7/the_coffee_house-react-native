import { StyleSheet, Dimensions } from 'react-native'
const { height: SCREEN_HIGHT } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fce8b5',
  },
  boxAuth: {
    height: 300,
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: 'white',
    marginVertical: 50,
    marginHorizontal: 20,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  title: {
    alignSelf: 'center',
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
  },
  content: {
    textAlign: 'center',
    color: 'black',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  btn1: {
    alignSelf: 'center',
    width: 200,
    marginTop: 10,
    backgroundColor: '#e68a00',
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
    alignItems: 'center',
  },
  btn2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
    width: '100%',
    backgroundColor: 'white',
    paddingVertical: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  btn_dn: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  btn2_kttv: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
  },
  bottomSheetContainer: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 25,
    top: SCREEN_HIGHT,
    paddingHorizontal: 20,
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: 'gray',
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 2,
  },
  column: {
    height: '100%',
    width: 1,
    backgroundColor: '#cccccc',
  },
  frames: {
    height: 150,
    width: '100%',
    borderRadius: 15,
    borderColor: '#cccccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: 'row',
    marginBottom: 15,
  },
  frames_box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide: {
    height: 150,
    width: '100%',
  },
  imageSlide: {
    height: '100%',
    width: Dimensions.get('window').width - 40,
    borderRadius: 15,
  },
  wrapLine: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  lineSlide: {
    width: 15,
    height: 4,
    backgroundColor: 'gray',
    marginHorizontal: 1,
    borderRadius: 2,
  },
  lineSlideNo: {
    backgroundColor: 'white',
  },
  menu: {
    flexDirection: 'column',
    marginTop: 15,
  },
  menu_title: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  menu_text: {
    marginRight: 5,
  },
  menu_title_child: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})
export default styles
