import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAllLaundryTimes } from "../../redux/bookedTimesSlice";
import { RootState } from "../../redux/store";
import { activateCalendar } from "../../redux/menuSlice";
import { BookedLaundrytimes } from "../../types/laundryTypes";
import { UserTypeWithNestedAdress } from "../../types/userType";
import Spinner from "../../ui/loadingSpinner/Spinner";
import Head from "../Helmet/Head";
import BookingLimitPopUp from "./bookingLimitPopUp/BookingLimitPopUp";
import EachBooking from "./eachBooking/EachBooking";
import { useGetTimeByUser } from "./hook/useGetTimeByUser";
import * as styles from "./myBookings.style";
import { deleteOutdatedBooking } from "./utils/delteOutdatedBooking";

interface Data {
  data: BookedLaundrytimes[] | null;
  loading: boolean;
  error: any;
}

const MyBookings = () => {
  const dispacth = useDispatch();
  const [bookingId, setBookingId] = useState<null | string>(null);
  const [toogleBookingLimit, setToogleBookingLimit] = useState(false);
  const [rerenderBookings, setRerenderBookings] = useState<boolean>(false);
  const user: UserTypeWithNestedAdress | null = useSelector(
    (state: RootState) => state.userReducer.user
  );
  const bookingLimit = useSelector(
    (state: RootState) => state.settingsReducer.bookingLimit
  );

  let bookedTimes: Data | null = null;
  if (user?.email) {
    bookedTimes = useGetTimeByUser(user?.email, rerenderBookings);
    setTimeout(() => {
      if (bookedTimes?.data) dispacth(addAllLaundryTimes(bookedTimes.data));
    }, 10);
  }

  deleteOutdatedBooking(bookedTimes);
  const backToCalendarOnClick = () => {
    dispacth(activateCalendar());
  };

  return (
    <styles.BackgroundContainer>
      <Head title='My booked times' description='My booked  laundry times' />
      <styles.Container>
        <styles.Link to={"/calendar"}>
          <styles.CalendarLink onClick={() => backToCalendarOnClick()} />
        </styles.Link>
        {toogleBookingLimit && (
          <BookingLimitPopUp setToogleBookingLimit={setToogleBookingLimit} />
        )}
        <styles.Title>
          My booked laundrytimes {bookedTimes?.data?.length || 0}/{bookingLimit}
        </styles.Title>
        {user?.admin && (
          <styles.ChooseTitle
            onClick={() => setToogleBookingLimit(!toogleBookingLimit)}
          >
            Change Booking Limit?
          </styles.ChooseTitle>
        )}
        {bookedTimes?.loading ? <Spinner /> : null}
        {bookedTimes?.data?.map((each: BookedLaundrytimes) => (
          <EachBooking
            bookingId={bookingId}
            setBookingId={setBookingId}
            key={each._id}
            info={each}
            setRerenderBookings={setRerenderBookings}
            rerenderBookings={rerenderBookings}
          />
        ))}
      </styles.Container>
    </styles.BackgroundContainer>
  );
};

export default MyBookings;
