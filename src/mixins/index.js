import { clearInterval } from "timers";

let log = console.log.bind(console)


export default {
  data(){
    return {
      log:''
    }
  },
  props:['day','hour','min','sec'],
  methods:{
    
    open(){
      log('asdf')
    },
    bodyScroll(event) {
      event.preventDefault()
    },
    stopScroll () {
      document.body.style.overflow = 'hidden'
      document.addEventListener('touchmove', this.bodyScroll, false)
    },
    startScroll () {
      document.body.style.overflow = ''// 出现滚动条
      document.removeEventListener('touchmove', this.bodyScroll, false)
    },
    dateDown(year,month,days,hour,minutes,section,setTime,timer2){
      // log(year,month,days,hour,minutes,section)
      let currentDate = new Date().getTime();
      let targetDate = new Date(year+'-'+(month+1)+'-'+days+' '+hour+':'+minutes+':'+section).getTime();
      // 时间差
      let leftTime = targetDate - currentDate;
      if(leftTime >= 0) {
        this.day = this.moreThan10(Math.floor(leftTime / 3600 / 1000 / 24));
        this.hour = this.moreThan10(Math.floor(leftTime / 3600 / 1000 % 24));
        this.min = this.moreThan10(Math.floor(leftTime / 1000 / 60 % 60));
        this.sec = this.moreThan10(Math.floor(leftTime / 1000 % 60));
      }else{
        clearInterval(timer2)

        this.day = this.moreThan10(0)
        this.hour = this.moreThan10(0)
        this.min = this.moreThan10(0)
        this.sec = this.moreThan10(0)
      }
      return this.day+'-'+this.hour+'-'+this.min+'-'+this.sec;
    },
    moreThan10(number) {
      return number < 10?'0'+number:number;
    },
    keepLastIndex(obj) {
      log(obj);
      log(window.getSelection)
      log(document.selection);
      if(window.getSelection) {
        obj.focus();
        let range = window.getSelection();
        range.selectAllChildren(obj);
        range.collapseToEnd();
      }
    }
  }
}