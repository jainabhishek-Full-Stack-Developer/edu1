import Studentclassescard from "./Studentclassescard";

const Studenttodayclasses = () => {
    return (
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '40px' }}>
            <Studentclassescard title="React Masterclass" teacher="John Doe" time="10:00 AM - 12:00 PM" status="Open" />
            <Studentclassescard title="Next.js Advanced" teacher="Jane Smith" time="2:00 PM - 3:30 PM" status="Closed" />
        </div>
    )
}

export default Studenttodayclasses;
