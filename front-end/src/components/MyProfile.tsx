// show individual user profile by taking session id
function MyProfile() {
    return (
        <>
            <h1>This will show the user their profile page!</h1>
            <p>The default view will be the MUI calendar with conic gradient circles to represent their emotions for any given day. Numbers will only show up on hover-over, so it doesn't obscure the gradients themselves (though this might need to be changed for mobile-view; maybe a toggle instead?)</p>
            <p>When you click on a given day, the number will persist and a left-to-right gradient will appear next to the calendarm which is like an unfolded version of the day. This is probably where the option to add or edit an emotion should go. (Get Claire's opinion!)</p>
        </>
    )
}

export default MyProfile;