export default function AppInfo({ userCount }) {
    return (
      <div className="app-info">
        <p>Der er i alt {userCount} brugere i systemet.</p>
        <p>Data hentes fra GitHub JSON-filen.</p>
      </div>
    );
  }
  