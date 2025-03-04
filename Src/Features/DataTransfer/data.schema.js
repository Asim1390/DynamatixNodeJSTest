import mongoose from 'mongoose';
/**
 * Mongoose schema for the Claims collection.
 * @module ClaimsSchema
 * @property {string} companyReference - The company reference (required).
 * @property {string} policyNumber - The policy number (required).
 * @property {string} partnerRef - The partner reference (required).
 * @property {Object} incidentDetails - Details about the incident.
 * @property {Date} incidentDetails.incidentDate - The date of the incident (required).
 * @property {string} incidentDetails.accidentCircumstances - Description of the accident circumstances.
 * @property {string} incidentDetails.damageToVehicle - Description of the damage to the vehicle.
 * @property {string} incidentDetails.preExistingDamage - Description of pre-existing damage.
 * @property {Object} vehicleDetails - Details about the vehicle.
 * @property {string} vehicleDetails.registrationNumber - The vehicle registration number (required).
 * @property {string} vehicleDetails.make - The make of the vehicle.
 * @property {string} vehicleDetails.model - The model of the vehicle.
 * @property {string} vehicleDetails.engineSize - The engine size of the vehicle.
 * @property {Date} vehicleDetails.registrationDate - The registration date of the vehicle.
 * @property {string} vehicleDetails.vehicleStatus - The status of the vehicle.
 * @property {string} vehicleDetails.imsVehicleStatus - The IMS status of the vehicle.
 * @property {Object} thirdPartyDetails - Details about the third party.
 * @property {string} thirdPartyDetails.insurer - The third-party insurer.
 * @property {string} thirdPartyDetails.ref - The third-party reference.
 * @property {string} thirdPartyDetails.client - The third-party client.
 * @property {string} thirdPartyDetails.registration - The third-party registration.
 * @property {Object} driverDetails - Details about the driver.
 * @property {string} driverDetails.firstName - The first name of the driver (required).
 * @property {string} driverDetails.lastName - The last name of the driver (required).
 * @property {string} driverDetails.title - The title of the driver.
 * @property {Object} driverDetails.address - The address of the driver.
 * @property {string} driverDetails.address.addressLine1 - The first line of the driver's address.
 * @property {string} driverDetails.address.postcode - The postcode of the driver's address.
 * @property {Object} driverDetails.contact - The contact details of the driver.
 * @property {string} driverDetails.contact.homeTelephone - The home telephone number of the driver.
 * @property {string} driverDetails.contact.workTelephone - The work telephone number of the driver.
 * @property {string} driverDetails.contact.mobileTelephone - The mobile telephone number of the driver.
 * @property {string} driverDetails.contact.fax - The fax number of the driver.
 * @property {string} driverDetails.contact.email - The email address of the driver.
 * @property {Object} repairerDetails - Details about the repairer.
 * @property {string} repairerDetails.repairerName - The name of the repairer.
 * @property {Object} repairerDetails.contact - The contact details of the repairer.
 * @property {string} repairerDetails.contact.telephone - The telephone number of the repairer.
 * @property {string} repairerDetails.contact.mobileTelephone - The mobile telephone number of the repairer.
 * @property {string} repairerDetails.contact.email - The email address of the repairer.
 * @property {string} repairerDetails.contact.fax - The fax number of the repairer.
 * @property {Object} repairerDetails.repairTimeline - The timeline of the repair process.
 * @property {Date} repairerDetails.repairTimeline.bookingInDate - The booking-in date.
 * @property {Date} repairerDetails.repairTimeline.mobileEstimateDate - The mobile estimate date.
 * @property {Date} repairerDetails.repairTimeline.dateIn - The date the vehicle was brought in.
 * @property {Date} repairerDetails.repairTimeline.estimateReceivedDate - The date the estimate was received.
 * @property {Date} repairerDetails.repairTimeline.authorisedDate - The date the repair was authorized.
 * @property {Object} repairerDetails.repairTimeline.authorisedAmounts - The authorized amounts for the repair.
 * @property {number} repairerDetails.repairTimeline.authorisedAmounts.parts - The authorized amount for parts.
 * @property {number} repairerDetails.repairTimeline.authorisedAmounts.labour - The authorized amount for labour.
 * @property {number} repairerDetails.repairTimeline.authorisedAmounts.paintAndMaterials - The authorized amount for paint and materials.
 * @property {number} repairerDetails.repairTimeline.authorisedAmounts.specialist - The authorized amount for specialist work.
 * @property {Date} repairerDetails.repairTimeline.supplementaryAuthorisedDate - The date of supplementary authorization.
 * @property {number} repairerDetails.repairTimeline.supplementaryAuthorisedAmounts - The supplementary authorized amounts.
 * @property {string} repairerDetails.repairTimeline.supplementaryReason - The reason for supplementary authorization.
 * @property {number} repairerDetails.repairTimeline.calculatedRepairDays - The calculated number of repair days.
 * @property {Date} repairerDetails.repairTimeline.estimatedCompletionDate - The estimated completion date.
 * @property {Date} repairerDetails.repairTimeline.revisedEstimatedCompletionDate - The revised estimated completion date.
 * @property {Date} repairerDetails.repairTimeline.repairCompletionDate - The actual repair completion date.
 * @property {Date} repairerDetails.repairTimeline.dateOut - The date the vehicle was taken out.
 * @property {Date} repairerDetails.repairTimeline.invoiceReceivedDate - The date the invoice was received.
 * @property {Date} repairerDetails.repairTimeline.invoiceApprovedDate - The date the invoice was approved.
 * @property {string} repairerDetails.repairTimeline.invoiceRejectedReasons - The reasons for invoice rejection.
 * @property {Object} salvageDetails - Details about the salvage.
 * @property {number} salvageDetails.salvageAmount - The salvage amount.
 * @property {string} salvageDetails.salvageCategory - The salvage category.
 * @property {string} salvageDetails.salvageAgentName - The name of the salvage agent.
 * @property {Object} salvageDetails.contact - The contact details of the salvage agent.
 * @property {string} salvageDetails.contact.workTelephone - The work telephone number of the salvage agent.
 * @property {string} salvageDetails.contact.mobileTelephone - The mobile telephone number of the salvage agent.
 * @property {string} salvageDetails.contact.fax - The fax number of the salvage agent.
 * @property {string} salvageDetails.contact.email - The email address of the salvage agent.
 * @property {Date} salvageDetails.salvageInstructedDate - The date salvage was instructed.
 * @property {Date} salvageDetails.salvageCollectedDate - The date salvage was collected.
 * @property {Date} salvageDetails.salvageClearedDate - The date salvage was cleared.
 * @property {string} salvageDetails.salvageLotNumber - The salvage lot number.
 * @property {number} salvageDetails.salvageValuePaid - The salvage value paid.
 * @property {number} salvageDetails.salvageValueReceived - The salvage value received.
 * @property {Object} financialDetails - Financial details related to the claim.
 * @property {Object} financialDetails.repairCost - The repair cost details.
 * @property {number} financialDetails.repairCost.net - The net repair cost.
 * @property {number} financialDetails.repairCost.vat - The VAT on the repair cost.
 * @property {number} financialDetails.repairCost.gross - The gross repair cost.
 * @property {Object} financialDetails.totalLossFee - The total loss fee details.
 * @property {number} financialDetails.totalLossFee.net - The net total loss fee.
 * @property {number} financialDetails.totalLossFee.vat - The VAT on the total loss fee.
 * @property {number} financialDetails.totalLossFee.gross - The gross total loss fee.
 * @property {Object} financialDetails.storageAndRecovery - The storage and recovery details.
 * @property {number} financialDetails.storageAndRecovery.net - The net storage and recovery cost.
 * @property {number} financialDetails.storageAndRecovery.vat - The VAT on storage and recovery.
 * @property {number} financialDetails.storageAndRecovery.gross - The gross storage and recovery cost.
 * @property {string} financialDetails.storageAndRecovery.ref - The storage and recovery reference.
 * @property {Object} financialDetails.engineersFee - The engineer's fee details.
 * @property {number} financialDetails.engineersFee.net - The net engineer's fee.
 * @property {number} financialDetails.engineersFee.vat - The VAT on the engineer's fee.
 * @property {number} financialDetails.engineersFee.gross - The gross engineer's fee.
 * @property {Object} financialDetails.deliveryAndCollection - The delivery and collection details.
 * @property {number} financialDetails.deliveryAndCollection.net - The net delivery and collection cost.
 * @property {number} financialDetails.deliveryAndCollection.vat - The VAT on delivery and collection.
 * @property {number} financialDetails.deliveryAndCollection.gross - The gross delivery and collection cost.
 * @property {number} financialDetails.excess - The excess amount.
 * @property {number} financialDetails.totalExcess - The total excess amount.
 * @property {number} financialDetails.pav - The PAV (Pre-Accident Value).
 * @property {number} financialDetails.tpiPavPayment - The TPI PAV payment.
 * @property {number} financialDetails.salvageValuePaid - The salvage value paid.
 * @property {number} financialDetails.salvageValueReceived - The salvage value received.
 * @property {Object} statusDetails - Status details related to the claim.
 * @property {string} statusDetails.status - The status of the claim (required).
 * @property {string} statusDetails.clsp - The CLSP (Claim Lifecycle Status Phase).
 * @property {string} statusDetails.billingStatus - The billing status.
 * @property {string} statusDetails.cdStatus - The CD (Claims Decision) status.
 * @property {string} statusDetails.fault - The fault status.
 * @property {boolean} statusDetails.underpinned - Whether the claim is underpinned.
 * @property {boolean} statusDetails.replacementVehicle - Whether a replacement vehicle is provided.
 * @property {string} statusDetails.schemeName - The scheme name.
 * @property {string} statusDetails.schemeCompanyReference - The scheme company reference.
 * @property {boolean} statusDetails.subrogated - Whether the claim is subrogated.
 * @property {Object} timestamps - Timestamps related to the claim.
 * @property {Date} timestamps.notificationDate - The notification date.
 * @property {Date} timestamps.tlDate - The TL (Total Loss) date.
 * @property {Date} timestamps.tLCallDate - The TL call date.
 * @property {Array<Date>} timestamps.tLChaseDates - The TL chase dates.
 * @property {Date} timestamps.v5CReceivedDate - The V5C received date.
 * @property {Date} timestamps.motReceivedDate - The MOT received date.
 * @property {Date} timestamps.financeLetterReceivedDate - The finance letter received date.
 * @property {Date} timestamps.packSubmittedToTPIDate - The date the pack was submitted to TPI.
 * @property {Date} timestamps.imagesReceivedDate - The date images were received.
 * @property {boolean} timestamps.customerRetaining - Whether the customer is retaining the vehicle.
 * @property {Object} notes - Notes related to the claim.
 * @property {string} notes.repairDelayNotes - Notes about repair delays.
 * @property {string} notes.valuationDisputeNotes - Notes about valuation disputes.
 * @property {string} notes.tpiPavPaymentChaseNotes - Notes about TPI PAV payment chases.
 */
const { Schema } = mongoose;

const ClaimsSchema = new Schema({
  companyReference: { type: String, required: true },
  policyNumber: { type: String, required: true },
  partnerRef: { type: String, required: true },
  incidentDetails: {
    incidentDate: { type: Date, required: true },
    accidentCircumstances: { type: String },
    damageToVehicle: { type: String },
    preExistingDamage: { type: String },
  },
  vehicleDetails: {
    registrationNumber: { type: String, required: true },
    make: { type: String },
    model: { type: String },
    engineSize: { type: String },
    registrationDate: { type: Date },
    vehicleStatus: { type: String },
    imsVehicleStatus: { type: String },
  },
  thirdPartyDetails: {
    insurer: { type: String },
    ref: { type: String },
    client: { type: String },
    registration: { type: String },
  },
  driverDetails: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    title: { type: String },
    address: {
      addressLine1: { type: String },
      postcode: { type: String },
    },
    contact: {
      homeTelephone: { type: String },
      workTelephone: { type: String },
      mobileTelephone: { type: String },
      fax: { type: String },
      email: { type: String },
    },
  },
  repairerDetails: {
    repairerName: { type: String },
    contact: {
      telephone: { type: String },
      mobileTelephone: { type: String },
      email: { type: String },
      fax: { type: String },
    },
    repairTimeline: {
      bookingInDate: { type: Date },
      mobileEstimateDate: { type: Date },
      dateIn: { type: Date },
      estimateReceivedDate: { type: Date },
      authorisedDate: { type: Date },
      authorisedAmounts: {
        parts: { type: Number },
        labour: { type: Number },
        paintAndMaterials: { type: Number },
        specialist: { type: Number },
      },
      supplementaryAuthorisedDate: { type: Date },
      supplementaryAuthorisedAmounts: { type: Number },
      supplementaryReason: { type: String },
      calculatedRepairDays: { type: Number },
      estimatedCompletionDate: { type: Date },
      revisedEstimatedCompletionDate: { type: Date },
      repairCompletionDate: { type: Date },
      dateOut: { type: Date },
      invoiceReceivedDate: { type: Date },
      invoiceApprovedDate: { type: Date },
      invoiceRejectedReasons: { type: String },
    },
  },
  salvageDetails: {
    salvageAmount: { type: Number },
    salvageCategory: { type: String },
    salvageAgentName: { type: String },
    contact: {
      workTelephone: { type: String },
      mobileTelephone: { type: String },
      fax: { type: String },
      email: { type: String },
    },
    salvageInstructedDate: { type: Date },
    salvageCollectedDate: { type: Date },
    salvageClearedDate: { type: Date },
    salvageLotNumber: { type: String },
    salvageValuePaid: { type: Number },
    salvageValueReceived: { type: Number },
  },
  financialDetails: {
    repairCost: {
      net: { type: Number },
      vat: { type: Number },
      gross: { type: Number },
    },
    totalLossFee: {
      net: { type: Number },
      vat: { type: Number },
      gross: { type: Number },
    },
    storageAndRecovery: {
      net: { type: Number },
      vat: { type: Number },
      gross: { type: Number },
      ref: { type: String },
    },
    engineersFee: {
      net: { type: Number },
      vat: { type: Number },
      gross: { type: Number },
    },
    deliveryAndCollection: {
      net: { type: Number },
      vat: { type: Number },
      gross: { type: Number },
    },
    excess: { type: Number },
    totalExcess: { type: Number },
    pav: { type: Number },
    tpiPavPayment: { type: Number },
    salvageValuePaid: { type: Number },
    salvageValueReceived: { type: Number },
  },
  statusDetails: {
    status: { type: String, required: true },
    clsp: { type: String },
    billingStatus: { type: String },
    cdStatus: { type: String },
    fault: { type: String },
    underpinned: { type: Boolean },
    replacementVehicle: { type: Boolean },
    schemeName: { type: String },
    schemeCompanyReference: { type: String },
    subrogated: { type: Boolean },
  },
  timestamps: {
    notificationDate: { type: Date },
    tlDate: { type: Date },
    tLCallDate: { type: Date },
    tLChaseDates: [{ type: Date }],
    v5CReceivedDate: { type: Date },
    motReceivedDate: { type: Date },
    financeLetterReceivedDate: { type: Date },
    packSubmittedToTPIDate: { type: Date },
    imagesReceivedDate: { type: Date },
    customerRetaining: { type: Boolean },
  },
  notes: {
    repairDelayNotes: { type: String },
    valuationDisputeNotes: { type: String },
    tpiPavPaymentChaseNotes: { type: String },
  },
});
/**
 * Mongoose model for the Claims collection.
 * @class Claims
 * @property {Object} schema - The schema definition for the Claims model.
 */
const Claims = mongoose.model('Claims', ClaimsSchema);
export default Claims;