import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Sparkles,
  Home,
  MessageCircle
} from 'lucide-react';

interface EstimatorProps {
  onApplyEstimate: (data: { category: string; budget: string; area: number; notes: string }) => void;
}

export const CostEstimator: React.FC<EstimatorProps> = ({ onApplyEstimate }) => {
  const [houseType, setHouseType] = useState<'1bhk' | '2bhk' | 'duplex' | 'labor'>('1bhk');
  const [squareFootage, setSquareFootage] = useState<number>(550);
  const [finishGrade, setFinishGrade] = useState<'standard' | 'deluxe'>('standard');
  
  // Toggles for village home features
  const [addVerandah, setAddVerandah] = useState<boolean>(true);
  const [addCompound, setAddCompound] = useState<boolean>(false);
  const [addSepticTank, setAddSepticTank] = useState<boolean>(true);
  const [addStaircase, setAddStaircase] = useState<boolean>(true);

  // Calculations in Indian Rupees
  const calculatedEstimate = useMemo(() => {
    let ratePerSqFt = 1350;

    if (houseType === 'labor') {
      ratePerSqFt = 300;
    } else if (houseType === '1bhk') {
      ratePerSqFt = finishGrade === 'standard' ? 1300 : 1450;
    } else if (houseType === '2bhk') {
      ratePerSqFt = finishGrade === 'standard' ? 1400 : 1580;
    } else if (houseType === 'duplex') {
      ratePerSqFt = finishGrade === 'standard' ? 1450 : 1650;
    }

    let total = ratePerSqFt * squareFootage;

    // Add-on costs
    if (addVerandah) total += 35000;
    if (addCompound) total += 60000;
    if (addSepticTank) total += 45000;
    if (addStaircase) total += 40000;

    const lowEstimate = Math.round(total * 0.95);
    const highEstimate = Math.round(total * 1.05);

    const lowInLakhs = (lowEstimate / 100000).toFixed(2);
    const highInLakhs = (highEstimate / 100000).toFixed(2);

    // Approximate materials
    const cementBags = Math.round(squareFootage * 0.52);
    const steelTonnes = (squareFootage * 0.0038).toFixed(1);
    const redBricks = Math.round(squareFootage * 32);

    // Timeline in days
    let days = 70;
    if (squareFootage > 600) days = 85;
    if (squareFootage > 1000) days = 110;

    return {
      formattedRange: `₹${lowInLakhs} L – ₹${highInLakhs} Lakhs`,
      ratePerSqFt,
      days,
      cementBags,
      steelTonnes,
      redBricks,
    };
  }, [houseType, squareFootage, finishGrade, addVerandah, addCompound, addSepticTank, addStaircase]);

  const handleApply = () => {
    onApplyEstimate({
      category: houseType,
      budget: calculatedEstimate.formattedRange,
      area: squareFootage,
      notes: `House Model: ${houseType.toUpperCase()}, Area: ${squareFootage} sq.ft, Finish: ${finishGrade.toUpperCase()}, Verandah: ${addVerandah ? 'Yes' : 'No'}, Compound: ${addCompound ? 'Yes' : 'No'}, Septic: ${addSepticTank ? 'Yes' : 'No'}, Staircase: ${addStaircase ? 'Yes' : 'No'}`
    });
  };

  const whatsappEstimateUrl = `https://wa.me/916303648230?text=Hello%20V-Constructions,%20my%20plot%20area%20is%20${squareFootage}%20sq.ft,%20model:%20${houseType}.%20Estimated%20quote:%20${encodeURIComponent(calculatedEstimate.formattedRange)}.%20Please%20contact%20me.`;

  return (
    <section className="section-padding estimator-section" id="estimator">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge-pill">
            <Calculator size={14} className="text-amber" />
            <span>Simple Construction Cost Estimator</span>
          </span>
          <h2 className="section-title">
            Village House <span className="text-gradient-amber">Cost & Material</span> Estimator.
          </h2>
          <p className="section-subtitle">
            Move the slider to match your plot or room size. Get instant estimates for total cost in Rupees, 
            along with approximate cement bags, steel tonnes, and red bricks required.
          </p>
        </div>

        <div className="estimator-grid">
          {/* Controls Box */}
          <div className="estimator-controls glass-panel">
            {/* Step 1: House Model */}
            <div className="control-group">
              <label className="form-label">Step 1: Choose House Type</label>
              <div className="type-selector-grid">
                {[
                  { id: '1bhk', label: 'Budget 1BHK (400 - 550 sq.ft)' },
                  { id: '2bhk', label: 'Comfort 2BHK Home (600 - 900 sq.ft)' },
                  { id: 'duplex', label: 'G+1 Duplex Home (1000 - 1500 sq.ft)' },
                  { id: 'labor', label: 'Labor Only (Workmanship Only)' },
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    className={`type-pill-btn ${houseType === type.id ? 'active' : ''}`}
                    onClick={() => setHouseType(type.id as any)}
                  >
                    <span>{type.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Total Built-up Area */}
            <div className="control-group">
              <div className="slider-header-row">
                <label className="form-label">Step 2: Total Built-up Area (Sq. Ft)</label>
                <span className="slider-live-value text-amber">
                  {squareFootage} sq.ft
                </span>
              </div>
              <input
                type="range"
                min={350}
                max={1600}
                step={25}
                value={squareFootage}
                onChange={(e) => setSquareFootage(Number(e.target.value))}
                className="custom-range-slider"
              />
              <div className="slider-scale-ticks">
                <span>350 sq.ft (1BHK)</span>
                <span>650 sq.ft (2BHK)</span>
                <span>1000 sq.ft</span>
                <span>1600 sq.ft (Duplex)</span>
              </div>
            </div>

            {/* Step 3: Finish & Material Grade */}
            {houseType !== 'labor' && (
              <div className="control-group">
                <label className="form-label">Step 3: Specification Level</label>
                <div className="grade-selector-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                  <div
                    className={`grade-card ${finishGrade === 'standard' ? 'active' : ''}`}
                    onClick={() => setFinishGrade('standard')}
                  >
                    <div className="grade-card-title">Standard Rural Package (₹1,300 - ₹1,400/sft)</div>
                    <div className="grade-card-desc">Red clay bricks, 53-grade cement, TMT steel, ceramic tiles, flush doors & Asian tractor emulsion.</div>
                  </div>
                  <div
                    className={`grade-card ${finishGrade === 'deluxe' ? 'active' : ''}`}
                    onClick={() => setFinishGrade('deluxe')}
                  >
                    <div className="grade-card-title">Deluxe Modern Package (₹1,450 - ₹1,650/sft)</div>
                    <div className="grade-card-desc">Teak main door, 2x2 vitrified tiles, UPVC windows, granite kitchen platform & Asian Apex exterior paint.</div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Village Add-on Features */}
            <div className="control-group">
              <label className="form-label">Step 4: Additional Features</label>
              <div className="toggles-grid">
                <label className="checkbox-toggle-item">
                  <input
                    type="checkbox"
                    checked={addVerandah}
                    onChange={(e) => setAddVerandah(e.target.checked)}
                  />
                  <span>Front Porch / Sitout (+₹35k)</span>
                </label>
                <label className="checkbox-toggle-item">
                  <input
                    type="checkbox"
                    checked={addSepticTank}
                    onChange={(e) => setAddSepticTank(e.target.checked)}
                  />
                  <span>Septic Tank & Sanitation (+₹45k)</span>
                </label>
                <label className="checkbox-toggle-item">
                  <input
                    type="checkbox"
                    checked={addStaircase}
                    onChange={(e) => setAddStaircase(e.target.checked)}
                  />
                  <span>RCC Staircase to Roof (+₹40k)</span>
                </label>
                <label className="checkbox-toggle-item">
                  <input
                    type="checkbox"
                    checked={addCompound}
                    onChange={(e) => setAddCompound(e.target.checked)}
                  />
                  <span>Compound Wall & Steel Gate (+₹60k)</span>
                </label>
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="estimator-results glass-panel">
            <div className="results-header">
              <Sparkles size={22} className="text-amber" />
              <h3 className="results-title">Estimated Cost & Materials</h3>
            </div>

            {/* Budget Display */}
            <div className="result-metric-card budget-highlight-card">
              <div className="metric-tag">Estimated Total Project Cost</div>
              <div className="metric-primary-value text-gradient-amber">
                {calculatedEstimate.formattedRange}
              </div>
              <div className="metric-sub-note">
                {houseType === 'labor' 
                  ? 'Labor only contract rate: ~₹300 / sq.ft (You supply materials)'
                  : 'Complete With-Material contract: ~₹1,350 to ₹1,550 / sq.ft'}
              </div>
            </div>

            {/* Timeline & Material Metrics Grid */}
            <div className="results-sub-grid">
              <div className="result-sub-card">
                <Clock size={20} className="text-amber" />
                <div className="sub-card-data">
                  <div className="sub-card-value">{calculatedEstimate.days} Days</div>
                  <div className="sub-card-label">Handover to Move-in</div>
                </div>
              </div>

              <div className="result-sub-card">
                <Home size={20} className="text-amber" />
                <div className="sub-card-data">
                  <div className="sub-card-value">~{calculatedEstimate.cementBags} Bags</div>
                  <div className="sub-card-label">Cement Required</div>
                </div>
              </div>
            </div>

            {/* Materials Breakdown */}
            <div className="estimator-inclusions">
              <h4 className="inclusions-title">Approximate Materials Needed:</h4>
              <ul className="inclusions-list">
                <li><CheckCircle size={15} className="text-emerald" /> <strong>TMT Steel:</strong> ~{calculatedEstimate.steelTonnes} Tonnes (Fe550)</li>
                <li><CheckCircle size={15} className="text-emerald" /> <strong>Red Clay Bricks:</strong> ~{calculatedEstimate.redBricks.toLocaleString()} Bricks</li>
                <li><CheckCircle size={15} className="text-emerald" /> <strong>Slab Thickness:</strong> 4.5" to 5" with machine vibration</li>
                <li><CheckCircle size={15} className="text-emerald" /> <strong>Foundation:</strong> Heavy stone masonry & plinth beam</li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a
                href={whatsappEstimateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ width: '100%', color: '#34d399', borderColor: 'rgba(16, 185, 129, 0.4)' }}
              >
                <MessageCircle size={18} />
                <span>Send This Estimate to WhatsApp</span>
              </a>

              <button
                onClick={handleApply}
                className="btn btn-primary apply-estimate-btn"
                id="apply-estimate-to-contact"
              >
                <span>Book Free Village Site Inspection</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
