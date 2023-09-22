const financialHeaders = ["2023 Q3", "2023 Q2", "2023 Q1", "2022 Q4"];

const properties = {
    balanceSheet: [
        "assets",
        "current_assets",
        "liabilities",
        "current_liabilities",
        "equity",
        "equity_attributable_to_noncontrolling_interest",
        "equity_attributable_to_parent",
        "fixed_assets",
        "liabilities_and_equity",
        "noncurrent_assets",
        "noncurrent_liabilities",
        "other_than_fixed_noncurrent_assets",
    ],
    cashFlow: [
        "net_cash_flow_from_operating_activities_continuing",
        "net_cash_flow_from_investing_activities_continuing",
        "net_cash_flow_from_financing_activities",
        "net_cash_flow",
        "net_cash_flow_from_financing_activities_continuing",
        "net_cash_flow_continuing",
        "net_cash_flow_from_operating_activities",
        "net_cash_flow_from_investing_activities",
    ],
    comprehensiveIncome: [
        "comprehensive_income_loss_attributable_to_noncontrolling_interest",
        "comprehensive_income_loss",
        "other_comprehensive_income_loss",
        "comprehensive_income_loss_attributable_to_parent",
    ],
    incomeStatement: [
        "net_income_loss_attributable_to_parent",
        "income_loss_from_continuing_operations_after_tax",
        "income_tax_expense_benefit",
        "basic_earnings_per_share",
        "gross_profit",
        "benefits_costs_expenses",
        "preferred_stock_dividends_and_other_adjustments",
        "operating_income_loss",
        "income_loss_from_continuing_operations_before_tax",
        "operating_expenses",
        "interest_expense_operating",
        "income_tax_expense_benefit_deferred",
        "diluted_earnings_per_share",
        "net_income_loss",
        "costs_and_expenses",
        "revenues",
        "cost_of_revenue",
        "participating_securities_distributed_and_undistributed_earnings_loss_basic",
        "net_income_loss_available_to_common_stockholders_basic",
        "nonoperating_income_loss",
        "net_income_loss_attributable_to_noncontrolling_interest",
    ],
};

const { balanceSheet, cashFlow, incomeStatement, comprehensiveIncome } =
    properties;

const financialTables = [
    {
        title: "Balance Sheet",
        properties: balanceSheet,
        dataKey: "balance_sheet",
    },
    {
        title: "Income Statement",
        properties: incomeStatement,
        dataKey: "income_statement",
    },
    {
        title: "Cash Flow Statement",
        properties: cashFlow,
        dataKey: "cash_flow_statement",
    },
    {
        title: "Comprehensive Income",
        properties: comprehensiveIncome,
        dataKey: "comprehensive_income",
    },
];

export { financialTables, financialHeaders };
