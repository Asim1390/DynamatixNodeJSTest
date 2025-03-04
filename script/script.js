/**
 * Mongoose model for the Claims collection.
 * @module Claims
 * @requires mongoose
 * @requires xlsx
 * @requires ../Src/Features/DataTransfer/data.schema
 * @requires ../config/mongooseConfig
 */

import mongoose from 'mongoose';
import xlsx from 'xlsx';
import Claims from '../Src/Features/DataTransfer/data.schema.js';
import { connectUsingMongoose } from '../config/mongooseConfig.js';

/**
 * Reads an Excel file and converts it to JSON.
 * @function readExcelFile
 * @param {string} filePath - The path to the Excel file.
 * @returns {Array<Object>} An array of objects representing the rows in the Excel sheet.
 * @example
 * // Example usage:
 * const excelData = readExcelFile('path/to/file.xlsx');
 * console.log(excelData); // Output: [{ CompanyReference: 'REF123', PolicyNumber: 'POL123', ... }, ...]
 */
const readExcelFile = (filePath) => {
  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  return xlsx.utils.sheet_to_json(worksheet);
};

/**
 * Maps Excel data to the Claims schema structure.
 * @function mapExcelDataToSchema
 * @param {Array<Object>} excelData - The data read from the Excel file.
 * @returns {Array<Object>} An array of objects formatted according to the Claims schema.
 * @example
 * // Example usage:
 * const mappedData = mapExcelDataToSchema(excelData);
 * console.log(mappedData); // Output: [{ companyReference: 'REF123', policyNumber: 'POL123', ... }, ...]
 */
const mapExcelDataToSchema = (excelData) => {
  return excelData.map((row) => ({
    companyReference: row.CompanyReference,
    policyNumber: row.PolicyNumber,
    partnerRef: row.PartnerRef,
    incidentDetails: {
      incidentDate: row.IncidentDate,
      accidentCircumstances: row.AccidentCircumstances,
      damageToVehicle: row.DamageToVehicle,
      preExistingDamage: row.PreExisting_Damage,
    },
    vehicleDetails: {
      registrationNumber: row.RegistrationNumber,
      make: row.MAKE,
      model: row.MODEL,
      engineSize: row.EngineSize,
      registrationDate: row.RegistrationDate,
      vehicleStatus: row.VehicleStatus,
      imsVehicleStatus: row.IMSVehicleStatus,
    },
    thirdPartyDetails: {
      insurer: row.ThirdPartyInsurer,
      ref: row.ThirdPartyRef,
      client: row.ThirdPartyClient,
      registration: row.ThirdPartyRegistration,
    },
    driverDetails: {
      firstName: row.Driver_FirstName,
      lastName: row.Driver_LastName,
      title: row.Driver_TitleLU,
      address: {
        addressLine1: row.Driver_Address_AddressLine1,
        postcode: row.Driver_Address_Postcode,
      },
      contact: {
        homeTelephone: row.Driver_Contact_HomeTelephone,
        workTelephone: row.Driver_Contact_WorkTelephone,
        mobileTelephone: row.Driver_Contact_MobileTelephone,
        fax: row.Driver_Contact_Fax,
        email: row.Driver_Contact_Email,
      },
    },
    repairerDetails: {
      repairerName: row.RepairerName,
      contact: {
        telephone: row.Repairer_Contact_Telephone,
        mobileTelephone: row.Repairer_Contact_MobileTelephone,
        email: row.Repairer_Contact_Email,
        fax: row.Repairer_Contact_Fax,
      },
      repairTimeline: {
        bookingInDate: row.BookingInDate,
        mobileEstimateDate: row.MobileEstimateDate,
        dateIn: row.DateIn,
        estimateReceivedDate: row.EstimateReceivedDate,
        authorisedDate: row.AuthorisedDate,
        authorisedAmounts: {
          parts: row.AuthorisedPartsAmount,
          labour: row.AuthorisedLabourAmount,
          paintAndMaterials: row.AuthorisedPaintAndMaterialsAmount,
          specialist: row.AuthorisedSpecialistAmount,
        },
        supplementaryAuthorisedDate: row.SupplementaryAuthorisedDate,
        supplementaryAuthorisedAmounts: row.SupplementaryAuthorisedAmounts,
        supplementaryReason: row.SupplementaryReason,
        calculatedRepairDays: row.CalculatedRepairDays,
        estimatedCompletionDate: row.EstimatedCompletionDate,
        revisedEstimatedCompletionDate: row.RevisedEstimatedCompletionDate,
        repairCompletionDate: row.RepairCompletionDate,
        dateOut: row.DateOut,
        invoiceReceivedDate: row.InvoiceReceivedDate,
        invoiceApprovedDate: row.InvoiceApprovedDate,
        invoiceRejectedReasons: row.InvoiceRejectedReasons,
      },
    },
    salvageDetails: {
      salvageAmount: row.SalvageAmount,
      salvageCategory: row.SalvageCategory,
      salvageAgentName: row.SalvageAgentName,
      contact: {
        workTelephone: row.Salvage_Contact_WorkTelephone,
        mobileTelephone: row.Salvage_Contact_MobileTelephone,
        fax: row.Salvage_Contact_Fax,
        email: row.Salvage_Contact_Email,
      },
      salvageInstructedDate: row.SalvageInstructedDate,
      salvageCollectedDate: row.SalvageCollectedDate,
      salvageClearedDate: row.SalvageClearedDate,
      salvageLotNumber: row.SalvageLotNumber,
      salvageValuePaid: row.SalvageValuePaid,
      salvageValueReceived: row.SalvageValueReceived,
    },
    financialDetails: {
      repairCost: {
        net: row['Repair Cost Net'],
        vat: row['Repair Cost Vat'],
        gross: row['Repair Cost Gross'],
      },
      totalLossFee: {
        net: row['Total Loss Fee Net'],
        vat: row['Total Loss Fee Vat'],
        gross: row['Total Loss Fee Gross'],
      },
      storageAndRecovery: {
        net: row['Storage and Recovery Net'],
        vat: row['Storage and Recovery Vat'],
        gross: row['Storage and Recovery Gross'],
        ref: row['Storage and Recovery Ref'],
      },
      engineersFee: {
        net: row['Engineers Fee Net'],
        vat: row['Engineers Fee Vat'],
        gross: row['Engineers Fee Gross'],
      },
      deliveryAndCollection: {
        net: row['Del and Col Net'],
        vat: row['Del and Col VAT'],
        gross: row['Del and Col Gross'],
      },
      excess: row.Excess,
      totalExcess: row.TotalExcess,
      pav: row.PAV,
      tpiPavPayment: row.TPIPAVPayment,
      salvageValuePaid: row.SalvageValuePaid,
      salvageValueReceived: row.SalvageValueReceived,
    },
    statusDetails: {
      status: row.Status,
      clsp: row.CLSP,
      billingStatus: row['Billing Status'],
      cdStatus: row.CDStatus,
      fault: row.Fault,
      underpinned: row.Underpinned === 'Yes', 
      replacementVehicle: row['Replacement Vehicle'] === 'Yes', 
      schemeName: row.SchemeName,
      schemeCompanyReference: row.SchemeCompanyReference,
      subrogated: row.Subrogated === 'Yes', 
    },
    timestamps: {
      notificationDate: row['Notification Date'],
      tlDate: row.TLDate,
      tLCallDate: row.TLCallDate,
      tLChaseDates: row.TLChaseDates,
      v5CReceivedDate: row.V5CReceivedDate,
      motReceivedDate: row.MOTReceviedDate,
      financeLetterReceivedDate: row.FinanceLetterReceviedDate,
      packSubmittedToTPIDate: row.PackSubmittedToTPIDate,
      imagesReceivedDate: row.ImagesReceivedDate,
      customerRetaining: row.CustomerRetaining === 'Yes', 
    },
    notes: {
      repairDelayNotes: row.RepairDelayNotes,
      valuationDisputeNotes: row.ValuationDisputeNotes,
      tpiPavPaymentChaseNotes: row.TPIPAVPaymentChaseNotes,
    },
  }));
};

/**
 * Script to import data from an Excel file into the MongoDB database.
 * @function DataScript
 * @async
 * @returns {Promise<void>} Resolves when the data import is complete.
 * @throws {Error} If there is an error during the data import process.
 * @example
 * // Example usage:
 * await DataScript();
 * // Output: 'Data imported successfully' or 'Error importing data: ...'
 */
const DataScript = async () => {
  try {
    await connectUsingMongoose();

    const excelData = readExcelFile('D:/All Stuff/Projects/DynamatixNodeJSTest/DynamatixNodeJSTest/script/dummy_records.xlsx'); 
    const mappedData = mapExcelDataToSchema(excelData);

    await Claims.insertMany(mappedData);
    console.log('Data imported successfully');
  } catch (error) {
    console.error('Error importing data:', error);
  } finally {
    mongoose.disconnect();
  }
};

export default DataScript;