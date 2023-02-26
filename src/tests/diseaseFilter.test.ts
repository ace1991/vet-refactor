import { DiseaseFilter } from '../core/diseaseFilter';

function createDiagnosis(id: number, location: string) {
    return {
        id: id,
        name: 'irrelevant-name',
        location: location,
        system: 'irrelevant-system',
        origin: 'irrelevant-origin',
        specie: 'irrelevant-specie',
    };
}

function createCase(diagnosisId: number, patientName: string) {
    return {
        id: 0,
        patientName: patientName,
        diagnosisId: diagnosisId,
        diagnosisName: 'irrelevant-diagnosisname',
        publicNotes: [],
        privateNotes: [],
    };
}

describe('Disease filter', () => {
    let cases = [];
    let diagnoses = [];

    it('filters cases when several diagnosis filters are applied together', () => {
        const patientName1 = 'Chupito';
        const patientName2 = 'Juliana';
        cases = [
            createCase(1, patientName1),
            createCase(2, patientName2),
            createCase(3, 'Irrelevant-name'),
        ];
        const searchCriteria1 = 'Vías respiratorias altas';
        const searchCriteria2 = 'Cerebro';
        diagnoses = [
            createDiagnosis(1, searchCriteria1),
            createDiagnosis(2, searchCriteria2),
            createDiagnosis(3, 'Irrelevant-location')
        ];
        const diseaseFilter = DiseaseFilter.create(cases, diagnoses);
        diseaseFilter.addFilter(searchCriteria2);
        diseaseFilter.addFilter(searchCriteria1);

        const result = diseaseFilter.casesFiltered;

        expect(result.length).toBe(2);
        expect(result[1].patientName).toBe(patientName1);
        expect(result[0].patientName).toBe(patientName2);
    });
});