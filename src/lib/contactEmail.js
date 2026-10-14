import "server-only";

function formatList(values = []) {
  if (!values.length) {
    return "None";
  }

  return values.join(", ");
}

export function buildContactEmail(data) {
  const subject =
    `New Sound Fusion Event Request — ${data.name}`;

  const text = `
NEW SOUND FUSION EVENT REQUEST

CUSTOMER
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Best time to call: ${data.bestCallTime || "Not provided"}
Contract signer: ${data.contractSigner}

EVENT
Date: ${data.eventDate}
Type: ${formatList(data.eventTypes)}
Start time: ${data.eventStartTime}
End time: ${data.eventEndTime}
Venue: ${data.venue}

PACKAGE
Basic package: ${data.basicPackage}
Lighting add-ons: ${formatList(data.lightingAddons)}

WEDDING DETAILS
Venue setup: ${data.weddingVenueSetup || "N/A"}
Number of setups: ${data.setupCount || "N/A"}
Wedding rehearsal: ${data.weddingRehearsal || "N/A"}
Rehearsal details: ${data.rehearsalDetails || "N/A"}
Officiant: ${data.officiant || "N/A"}

NATOX NUPTIALS
Small But Lovely Package: ${data.smallButLovelyPackage || "Not selected"}
It's Your Day Package: ${data.itsYourDayPackage || "Not selected"}

ADDITIONAL MESSAGE
${data.message || "No additional message provided."}
`.trim();

  return {
    subject,
    text,
  };
}