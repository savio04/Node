import IDateProvider from "../IDateProvider";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)
class DayJsDateProvider implements IDateProvider{
    compare(start_date:Date,end_date:Date){
        const start_date_utc = this.convertToUTC(start_date)
        const end_date_utc = this.convertToUTC(end_date)
        const compare =  dayjs(end_date_utc).diff(start_date_utc,"hours")

        return compare
    }

    convertToUTC(date:Date){
        return dayjs(date)
        .utc()
        .local()
        .format()
    }

    dateNow(){
        return dayjs().toDate()
    }

    compareInDays(start_date:Date, end_date:Date){
        const start_date_utc = this.convertToUTC(start_date)
        const end_date_utc = this.convertToUTC(end_date)
        const compare =  dayjs(end_date_utc).diff(start_date_utc,"day")

        return compare
    }
}

export default DayJsDateProvider