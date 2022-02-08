import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "../actions/filters";

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate))
    }
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }
    onTextChange = (e) => {this.props.dispatch(setTextFilter(e.target.value))}

    onSortChange = (e) => {
        if(e.target.value === 'date') {
            this.props.dispatch(sortByDate())
        } else if(e.target.value === 'amount') {
            this.props.dispatch(sortByAmount())
        }
    }
    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-roup__item">
                        <input className="text-input" type="text" placeholder="Search expenses" value={this.props.filters.text} onChange={this.onTextChange}/>
                    </div>
                    <div className="input-roup__item">
                        <select className="select" value={this.props.filters.sortBy} onChange={this.onSortChange}>
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                    <div className="input-roup__item">
                        <DateRangePicker 
                        startDate={this.props.filters.startDate}
                        startDateId="MystartDate"
                        endDateId="MyendDate"
                        endDate={this.props.filters.endDate}
                        onDatesChange={this.onDatesChange}
                        focusedInput={this.state.calendarFocused}
                        onFocusChange={(this.onFocusChange)}
                        showClearDates={true}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                        />
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters)