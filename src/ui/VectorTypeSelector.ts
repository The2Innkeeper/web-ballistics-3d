import { VectorType } from '../types/VectorType';

class VectorTypeSelector {
    constructor(private vectorTypeSelector: HTMLSelectElement, private onVectorTypeChange: (selectedType: VectorType) => void) {
        this.initialize();
    }

    private initialize(): void {
        this.vectorTypeSelector.addEventListener('change', this.handleChange.bind(this));
    }

    private handleChange(event: Event): void {
        const selectedType = (event.target as HTMLSelectElement).value as VectorType;
        this.onVectorTypeChange(selectedType);
    }

    public getInitialType(): VectorType {
        return this.vectorTypeSelector.value as VectorType;
    }
}

export default VectorTypeSelector;