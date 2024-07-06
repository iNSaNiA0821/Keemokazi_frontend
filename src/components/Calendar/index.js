import React, { useState, useCallback, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment-timezone";
// import events from "./events";
import jwt_decode from "jwt-decode";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Modal from "@netojose/react-modal";
import "./styles.css";
import turnoff from "../../assets/turnoff.webp";
import api from "../../utils/api";
import Swal from "sweetalert2";
import Loading from "../../pages/Loading";
import CopyToClipboard from "@vigosan/react-copy-to-clipboard";

moment.tz.setDefault("America/Los_Angeles");
const localizer = momentLocalizer(moment);

export default function ReactBigCalendar(props) {
  // const current_time = new Date();
  useEffect(() => {
    getMeetingschedule();
  }, []);

  const [eventsData, setEventsData] = useState([]);
  const [copyStatus, setCopyStatus] = useState("Copy");

  const getMeetingschedule = async () => {
    try {
      setLoading(true);
      var res = await api.get("/getMeetingschedule");
      if (res.data.msg.length > 0) {
        res.data.msg.map((data_event) => {
          data_event.start = new Date(data_event.start);
          data_event.end = new Date(data_event.end);
          return true;
        });

        setEventsData(res.data.msg);
        setLoading(false);
      } else {
        // swal("You are very happy!", "First user of our calendar.", "info");
        setLoading(false);
      }
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        Swal.fire("Oops!", errors, "error");
      }
      setLoading(false);
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const closeModal = useCallback(() => {
    setIsOpen(false);
    setCopyStatus("copy");
    setYourname(null);
    SetEditFormStatus(false);
  }, []);

  const [viewOpen, setViewOpen] = useState(false);
  const viewcloseModal = useCallback(() => {
    setViewOpen(false);
    setCopyStatus("copy");
    setYourname(null);
    SetEditFormStatus(false);
  }, []);

  const [starttime, setStarttime] = useState(null);
  const [endtime, setEndtime] = useState(null);
  const [yourname, setYourname] = useState(null);
  const [meetinglink, setMeetinglink] = useState("getting ...");

  const [meetingdata, setMeetingData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isMeetingStatus, setMeetingStatus] = useState(false);

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const DateForm = (value) => {
    var year = moment.tz(value, "America/Los_Angeles").format("YYYY");
    var month = moment.tz(value, "America/Los_Angeles").format("M");
    var day = moment.tz(value, "America/Los_Angeles").format("D");
    var hour = moment.tz(value, "America/Los_Angeles").format("HH");
    var minutes = moment.tz(value, "America/Los_Angeles").format("mm");

    var momentDate = moment(value);
    var dayCode = momentDate.weekday();

    var date_time = weekday[dayCode] + ", " + monthNames[month - 1] + " " + day;
    var time =
      String(hour).padStart(2, "0") + ":" + String(minutes).padStart(2, "0");

    var date = {
      year,
      month,
      day,
      hour,
      dayCode,
      minutes,
      time,
      date_time,
    };
    return date;
  };
  const openModal = async ({ start, end }) => {
    if (end - start <= 1800000) {
      var pst_start = moment.tz(start, "America/Los_Angeles").format();
      var pst_end = moment.tz(end, "America/Los_Angeles").format();
      var current_time = moment.tz(new Date(), "America/Los_Angeles").format();
      if (
        DateForm(pst_start).dayCode === 3 ||
        DateForm(pst_start).dayCode === 4
      ) {
        if (17 <= DateForm(pst_start).hour && DateForm(pst_start).hour <= 18) {
          if (pst_start !== pst_end && pst_end > current_time) {
            setStarttime(pst_start);
            setEndtime(pst_end);

            setIsOpen(true);
            setMeetingStatus(false);
            var res = await api.post("/createMeeting", {});
            if (res.data.result) {
              if (res.data.result === "error") {
                setMeetinglink("Please check your server.");
                setMeetingStatus(false);
              } else {
                setMeetinglink(res.data.result.join_url);
                setMeetingStatus(true);
              }
            } else {
              console.log("Network Error!");
            }
          } else {
            setIsOpen(false);
            Swal.fire(
              "Oops!",
              "The meeting cannot be scheduled at the selected time.",
              "error"
            );
          }
        } else {
          Swal.fire(
            "Oops!",
            "The meeting cannot be scheduled at the selected time.",
            "error"
          );
        }
      } else {
        Swal.fire(
          "Oops!",
          "The meeting cannot be scheduled at the selected time.",
          "error"
        );
      }
    } else {
      Swal.fire(
        "Oops!",
        "The meeting cannot be scheduled at the selected time.",
        "error"
      );
    }
  };

  const openView = (value) => {
    setViewOpen(true);
    setMeetingData(value);
  };

  const onChangeYourname = (value) => setYourname(value);

  const handleSelect = async () => {
    var start = starttime;
    var end = endtime;
    var title = yourname;
    var email = jwt_decode(localStorage.token).email;
    var link = meetinglink;

    var send_data = {
      start,
      end,
      title,
      email,
      link,
    };
    if (title === null || title === "" || !isMeetingStatus) {
      Swal.fire("Sorry!", "Please fill form correctly!", "warning");
      return;
    }
    setLoading(true);
    try {
      const res = await api.post("/meetingschedule", { send_data: send_data });
      if (res.data.msg === "success") {
        var _id = res.data.id;
        Swal.fire("Congratulations!", "Successfully Created!", "success");
        setCopyStatus("copy");
        SetEditFormStatus(false);
        setLoading(false);
        start = new Date(start);
        end = new Date(end);
        setEventsData([
          ...eventsData,
          {
            _id,
            start,
            end,
            title,
            email,
            link,
          },
        ]);
      } else {
        Swal.fire("Oops!", "Network Error!", "error");
        setLoading(false);
      }
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        Swal.fire("Oops!", errors, "error");
      }
      setLoading(false);
    }

    setStarttime(null);
    setEndtime(null);
    setYourname(null);
    setMeetinglink("getting ...");

    setIsOpen(false);
  };

  const deletemeeting = async (value) => {
    // console.log(value);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true);
        try {
          const res = await api.post("/deletemeetingschedule", {
            id: value,
            email: jwt_decode(localStorage.token).email,
          });
          if (res.data.msg.length > 0) {
            res.data.msg.map((data_event) => {
              data_event.start = new Date(data_event.start);
              data_event.end = new Date(data_event.end);
              return true;
            });
            setEventsData(res.data.msg);
            setLoading(false);
            viewcloseModal();
            Swal.fire("Congratulations!", "Successfully Deleted!", "success");
            SetEditFormStatus(false);
          } else {
            setLoading(false);
          }
        } catch (err) {
          const errors = err.response.data.errors;
          if (errors) {
            Swal.fire("Oops!", errors, "error");
          }
          setLoading(false);
        }
      }
    });
  };

  /////////////////////////////////

  const [editFormStatus, SetEditFormStatus] = useState(false);
  const [workingDays, setWorkingDays] = useState([]);
  const [selectedWorkDay, setSelectedWorkDay] = useState(100);
  const [selectedWorkhours, setSelectedWorkhours] = useState(0);

  const meetingtime = [
    { start: "17:00:00", end: "17:30:00" },
    { start: "17:30:00", end: "18:00:00" },
    { start: "18:00:00", end: "18:30:00" },
    { start: "18:30:00", end: "19:00:00" },
  ];

  const onEditForm = (Datetime, title) => {
    var Wednesday = moment().startOf("month").day("Wednesday");
    var Thursday = moment().startOf("month").day("Thursday");

    if (Wednesday.date() > 7 || Thursday.date() > 7) {
      Wednesday.add(7, "d");
      Thursday.add(7, "d");
    }

    var date = moment.tz(Datetime, "America/Los_Angeles").format("YYYY-MM-DD");
    var time = moment.tz(Datetime, "America/Los_Angeles").format("HH:mm:ss");

    var current_day = moment
      .tz(new Date(), "America/Los_Angeles")
      .format("YYYY-MM-DD");
    var workingdays_array = [];
    var index = 0,
      olddate = 0;
    while (Wednesday.month() || Thursday.month()) {
      var wed = Wednesday.format().toString();
      var thu = Thursday.format().toString();

      if (current_day <= Wednesday.format("YYYY-MM-DD")) {
        if (Wednesday.format("YYYY-MM-DD") === date) {
          olddate = 100 + index;
        }

        if (Thursday.format("YYYY-MM-DD") === date) {
          olddate = 200 + index;
        }
        index += 1;
        workingdays_array.push({ wed, thu });
      }

      Wednesday.add(7, "d");
      Thursday.add(7, "d");
    }

    var oldtime = 0;
    for (var i = 0; i < 4; i++) {
      if (meetingtime[i]?.start === time) {
        oldtime = i;
      }
    }

    setYourname(title);
    setSelectedWorkDay(olddate);
    setSelectedWorkhours(oldtime);
    setWorkingDays(workingdays_array);

    SetEditFormStatus(true);
  };

  const listItems = workingDays?.map((workingDay, index) => (
    <>
      <option value={index + 100}>{DateForm(workingDay?.wed).date_time}</option>
      <option value={index + 200}>{DateForm(workingDay?.thu).date_time}</option>
    </>
  ));

  const selectWorkDay = (value) => setSelectedWorkDay(value);
  const selectWorkhours = (value) => setSelectedWorkhours(value);

  const onSave = async (value) => {
    setLoading(true);
    var selectedworkingday;

    if (selectedWorkDay < 200) {
      selectedworkingday = workingDays[selectedWorkDay - 100]?.wed;
    } else {
      selectedworkingday = workingDays[selectedWorkDay - 200]?.thu;
    }

    var start = selectedworkingday.replace(
      "00:00:00",
      meetingtime[selectedWorkhours]?.start
    );
    var end = selectedworkingday.replace(
      "00:00:00",
      meetingtime[selectedWorkhours]?.end
    );
    var title = yourname;
    var id = value;

    var send_data = {
      id,
      start,
      end,
      title,
    };

    const res = await api.post("/editmeetingschedule", {
      data: send_data,
      email: jwt_decode(localStorage.token).email,
    });
    if (res.data.msg.length > 0) {
      res.data.msg.map((data_event) => {
        data_event.start = new Date(data_event.start);
        data_event.end = new Date(data_event.end);
        return true;
      });
      setEventsData(res.data.msg);
      setLoading(false);
      viewcloseModal();
      Swal.fire("Congratulations!", "Successfully Updated!", "success");
      SetEditFormStatus(false);
    } else {
      setLoading(false);
    }
  };

  window.addEventListener("click", (event) => {
    var clientHeight =
      document.getElementsByClassName("rbc-day-bg")[0].clientHeight;
    const el = document.createElement("style");
    const e2 = document.createElement("style");
    const e3 = document.createElement("style");
    const e4 = document.createElement("style");
    el.innerHTML = `
      .rbc-button-link {
        position: absolute;
        width: 100%;
        left: 0;
        height: ${clientHeight}px;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
      }
      123
    `;
    e2.innerHTML = `
      .rbc-date-cell {
        position: relative;
      }
      .rbc-day-slot.rbc-time-column {
        background: rgb(230, 230, 230);
      }
      .rbc-timeslot-group:nth-child(18) {
        background: white;
      }
      .rbc-timeslot-group:nth-child(19) {
        background: white;
      }
    `;
    e3.innerHTML = `
      .rbc-day-bg:nth-child(1) {
        background: rgb(230, 230, 230);
      }
      .rbc-day-bg:nth-child(2) {
        background: rgb(230, 230, 230);
      }
      .rbc-day-bg:nth-child(3) {
        background: rgb(230, 230, 230);
      }
      .rbc-day-bg:nth-child(6) {
        background: rgb(230, 230, 230);
      }
      .rbc-day-bg:nth-child(7) {
        background: rgb(230, 230, 230);
      }
    `;
    e4.innerHTML = `
      .rbc-date-cell:nth-child(1) {
           pointer-events: none;
            z-index: 10000;
      }
      .rbc-date-cell:nth-child(2) {
           pointer-events: none;
            z-index: 10000;
      }
      .rbc-date-cell:nth-child(3) {
           pointer-events: none;
            z-index: 10000;
      }
      .rbc-date-cell:nth-child(6) {
           pointer-events: none;
            z-index: 10000;
      }
      .rbc-date-cell:nth-child(7) {
           pointer-events: none;
            z-index: 10000;
      }
    `;
    document.head.appendChild(el);
    document.head.appendChild(e2);
    document.head.appendChild(e3);
    document.head.appendChild(e4);
    // console.log(clientWidth, clientHeight);
  });

  return (
    <div className="calendar-container">
      <div className="calendar-close">
        <img
          src={turnoff}
          alt=""
          width="25"
          onClick={() => props.setCalendar(false)}
        />
      </div>
      <Calendar
        views={["day", "month"]}
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={eventsData}
        style={{ height: "100vh" }}
        onSelectEvent={(event) => openView(event)}
        onSelectSlot={openModal}
      />
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        overlayStyles={{
          zIndex: "5",
          display: "flex",
          justifyContent: "center",
          paddingTop: "70px",
        }}
        modalStyles={{ inset: "", padding: "" }}
      >
        <div className="Modal-header">
          <h2>Create Meeting</h2>
          {/* <input type="button" className="close" value="&times;" onClick={closeModal} /> */}
        </div>

        <div className="container">
          <div style={{ padding: "0 13px 0 13px" }}>
            <h3> Time : </h3>
          </div>
          <h3>
            {" "}
            {"" +
              DateForm(starttime).date_time +
              " : " +
              DateForm(starttime).time +
              " ~ " +
              DateForm(endtime).time +
              ""}{" "}
          </h3>
        </div>

        <div>
          <div className="container">
            <div>Name : </div>
            <input
              id="client_name"
              onChange={(e) => {
                onChangeYourname(e.target.value);
              }}
            />
          </div>

          <div className="container">
            <div>Email : </div>
            {jwt_decode(localStorage.token).email}
          </div>

          <div className="container">
            <div>Link : </div>
            <CopyToClipboard
              onCopy={({ success, text }) => {
                var msg = success ? "Copied!" : "Whoops, not copied!";
                setCopyStatus(msg);
              }}
              render={({ copy }) => (
                <div className="Copyform">
                  {/* {`subscription-true-button ${localStorage.balanceof > 0}`} */}
                  <input style={{ minWidth: "70%" }} value={meetinglink} />
                  <button
                    className={`btn primary-button linkcopy ${isMeetingStatus}`}
                    onClick={() => copy(meetinglink)}
                    {...isMeetingStatus}
                  >
                    {copyStatus}
                  </button>
                </div>
              )}
            />
          </div>

          <div className="container-button">
            <input
              type="button"
              className="btn primary-button"
              value="Create"
              onClick={handleSelect}
            />
            <input
              type="button"
              className="btn close-button"
              value="Close"
              onClick={closeModal}
            />
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={viewOpen}
        onRequestClose={viewcloseModal}
        overlayStyles={{
          zIndex: "5",
          display: "flex",
          justifyContent: "center",
          paddingTop: "70px",
        }}
        modalStyles={{ inset: "", padding: "" }}
      >
        {!editFormStatus ? (
          <div>
            <div className="Modal-header">
              <h2> Meeting with {meetingdata?.title}</h2>
              {/* <input type="button" className="close" value="&times;" onClick={viewcloseModal} /> */}
            </div>

            <div className="container">
              <div style={{ padding: "0 13px 0 13px" }}>
                <h3> Time : </h3>
              </div>
              <h3>
                {" "}
                {"" +
                  DateForm(meetingdata?.start).date_time +
                  " : " +
                  DateForm(meetingdata?.start).time +
                  " ~ " +
                  DateForm(meetingdata?.end).time +
                  ""}{" "}
              </h3>
            </div>
          </div>
        ) : (
          <div>
            <div className="Modal-header">
              <h2>
                Meeting with :
                <input
                  id="title"
                  className="update-title"
                  onChange={(e) => {
                    onChangeYourname(e.target.value);
                  }}
                  value={yourname}
                />
                {/* <div> username {testValue}</div> */}
              </h2>
            </div>

            <div className="container">
              <div style={{ padding: "0 13px 0 13px" }}>
                <h3> Time : </h3>
              </div>

              <select
                value={selectedWorkDay}
                onChange={(e) => {
                  selectWorkDay(e.target.value);
                }}
                className="meetingdate"
              >
                {listItems}
              </select>

              <select
                value={selectedWorkhours}
                onChange={(e) => {
                  selectWorkhours(e.target.value);
                }}
                style={{ marginLeft: "5px" }}
                className="meetingtime"
              >
                <option value="0">17:00 ~ 17:30</option>
                <option value="1">17:30 ~ 18:00</option>
                <option value="2">18:00 ~ 18:30</option>
                <option value="3">18:30 ~ 19:00</option>
              </select>
            </div>
          </div>
        )}

        <hr />

        <div className="container">
          <div>Email : </div>
          <p> {meetingdata?.email} </p>
        </div>

        <div className="container">
          <div>Link : </div>
          <CopyToClipboard
            onCopy={({ success, text }) => {
              var msg = success ? "Copied!" : "Whoops, not copied!";
              setCopyStatus(msg);
            }}
            render={({ copy }) => (
              <div className="Copyform">
                <input style={{ minWidth: "70%" }} value={meetingdata?.link} />
                <button
                  className="btn primary-button linkcopy"
                  onClick={() => copy(meetingdata?.link)}
                >
                  {copyStatus}
                </button>
              </div>
            )}
          />
        </div>

        <hr />
        <div className="container-button">
          {jwt_decode(localStorage.token).email === meetingdata?.email ? (
            !editFormStatus ? (
              <input
                type="button"
                className="btn primary-button"
                onClick={(e) => {
                  onEditForm(meetingdata?.start, meetingdata?.title);
                }}
                value="Update"
              />
            ) : (
              <input
                type="button"
                className="btn primary-button"
                onClick={(e) => {
                  onSave(meetingdata?._id);
                }}
                value="Save"
              />
            )
          ) : (
            ""
          )}
          {jwt_decode(localStorage.token).email === meetingdata?.email ? (
            <input
              type="button"
              className="btn delete-button"
              value="Delete"
              onClick={(e) => {
                deletemeeting(meetingdata?._id);
              }}
            />
          ) : (
            ""
          )}
          <input
            type="button"
            className="btn close-button"
            value="Close"
            onClick={viewcloseModal}
          />
        </div>
      </Modal>
      {loading ? <Loading flag={true} /> : <div></div>}
    </div>
  );
}
