import React, { useEffect, useRef } from 'react';

interface HubSpotFormProps {
portalId = "48134768",
formId = "80f63854-f85a-4f81-9384-bc524c30d987",
region = "na1"
}

const HubSpotForm: React.FC<HubSpotFormProps> = ({ portalId, formId, region }) => {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if the HubSpot script is already loaded
    if (window.hbspt) {
      // If script is loaded, create the form directly
      window.hbspt.forms.create({
        portalId,
        formId,
        region,
        target: `#hubspot-form-${formId}`,
      });
      return;
    }

    // Create and append the HubSpot script
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.charset = 'utf-8';
    script.async = true;

    script.onload = () => {
      if (window.hbspt && formRef.current) {
        window.hbspt.forms.create({
          portalId,
          formId,
          region,
          target: `#hubspot-form-${formId}`,
        });
      }
    };

    document.body.appendChild(script);

    // Cleanup: Remove the script when the component unmounts
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [portalId, formId, region]);

  return <div id={`hubspot-form-${formId}`} ref={formRef} />;
};

export default HubSpotForm;