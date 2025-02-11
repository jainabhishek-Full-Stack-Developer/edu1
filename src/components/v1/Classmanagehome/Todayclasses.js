import Classescard from "./Classescard";

const Todayclasses = () => {
  return (
    <div>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '40px' }}>
        <Classescard type="Paid" title="React Masterclass" teacher="John Doe" time="10:00 AM - 12:00 PM" status="Open" />
        <Classescard type="Demo" title="Next.js Advanced" teacher="Jane Smith" time="2:00 PM - 3:30 PM" status="Closed" />
      </div>
    </div>
  )
}

export default Todayclasses
