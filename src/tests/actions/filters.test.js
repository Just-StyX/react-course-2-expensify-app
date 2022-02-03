import moment from 'moment';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../../actions/filters'

test('Should set up set text filter action object', () =>{
    const text = 'some text'
    const action = setTextFilter(text);
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text
    })
})

test('Should set up set text filter action object', () =>{
    const action = setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text: ''
    })
})

test('Should set up sort by amount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('Should set up sort by date action object', () => {
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' })
})

test('Should set up set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('Should set up set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0) 
    })
}) 